import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { ConnectionQueryParam, IConnectionServiceConfig, IData } from '../models';
import { toResponseBody, uploadProgress } from '../../@rxjs/operators';
import { ConnectionFetchService } from './connection.fetch.service';
import { toFormData } from '../functions/toFormData.function';
import { toUrl } from '../functions';

/**
 * GENERIC HTTP Crud operations service.
 * Implementation example:
 ```
 @Injectable()
 export class AuthService extends ConnectionService<Credential, CredentialQuery> {
    protected query: Store<CredentialQuery> = new Store<CredentialQuery>(new CredentialQuery({}));

    constructor(@Inject(CONNECTION_CONFIG) public connection: IConnectionConfig, httpClient: HttpClient) {
        super({ ...connection, sourceUrl: '/auth/signin' }, httpClient);
    }
 }
 ```
 *
 */
export abstract class ConnectionService<
    MODEL extends IData,
    QUERY extends ConnectionQueryParam
> extends ConnectionFetchService<MODEL, QUERY> {
    protected constructor(public config: IConnectionServiceConfig, public httpClient: HttpClient) {
        super(config, httpClient);
    }

    /**
     * Saves from passed value as FormData
     */
    upload(value: MODEL | any, q?: QUERY): Observable<MODEL> {
        const options = {
            observe: 'events',
            reportProgress: true
        } as any;
        const formData = toFormData<MODEL>(value);
        const query = q || this.Query;
        const url = !value.id
            ? toUrl(this.config, query, query.childUrl)
            : toUrl(this.config, query, query.childUrl || `/${value.id}`);

        this.setWorking(true);

        return (!value.id
            ? this.httpClient.post<MODEL>(url, formData, options)
            : this.httpClient.patch<MODEL>(url, formData, options)
        ).pipe(
            uploadProgress(progress => this.setProgress(progress)),
            toResponseBody(),
            this.finalizeConnection()
        );
    }

    /**
     * Makes request to API with POST Method
     * @param d, DATA to record
     * @param q (used for parent/child url context replaces)
     */
    post(d: MODEL, q?: QUERY): Observable<MODEL> {
        const query = q || this.Query;
        const url = toUrl(this.config, query, query.childUrl);
        this.setWorking(true);

        return this.httpClient
            .post<MODEL>(url, { d })
            .pipe(this.finalizeConnection());
    }

    /**
     * Makes request to API with PATCH Method
     * @param d, DATA to update
     * @param q (used for parent/child url context replaces)
     */
    patch(d: MODEL, q?: QUERY): Observable<MODEL> {
        const query = q || this.Query;
        const url = toUrl(this.config, query, query.childUrl || `/${d.id}`);
        this.setWorking(true);

        return this.httpClient
            .patch<MODEL>(url, { d })
            .pipe(this.finalizeConnection());
    }

    /**
     * Makes request to API with DELETE Method
     * @param id, identification param of the object to delete
     * @param q (used for parent/child url context replaces)
     */
    delete(id: number | string, q?: QUERY): Observable<any> {
        const query = q || this.Query;
        const url = toUrl(this.config, query, query.childUrl || `/${id}`);
        this.setWorking(true);

        return this.httpClient.delete(url).pipe(this.finalizeConnection());
    }

    /**
     * Saves from passed value
     */
    save(value: MODEL | any, q?: QUERY): Observable<MODEL> {
        return !value.id ? this.post(value, q) : this.patch(value, q);
    }

    /**
     * Saves current$ value of the service.
     * @param q, alternative query to save data
     */
    saveCurrent(q?: QUERY): Observable<MODEL> {
        return this.save(this.Current);
    }

    /**
     * Saves from passed value
     */
    saveMany(values: MODEL[], q?: QUERY): Observable<MODEL[] | any> {
        if (values.length) {
            return forkJoin(values.map(model => this.save(model, q)));
        } else {
            return of([]);
        }
    }

    /**
     * Finalize Observable operator for current context
     */
    protected finalizeConnection() {
        return (src: Observable<any>) =>
            src.pipe(
                tap(() => this.clear(null, true)),
                super.finalizeConnection()
            );
    }
}
