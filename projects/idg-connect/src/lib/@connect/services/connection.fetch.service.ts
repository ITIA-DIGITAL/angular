import { tap } from 'rxjs/operators';
import { of, iif, Observable, Subscription, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConnectionCacheService } from './connection.cache.service';
import { IConnectionServiceConfig, IData, ConnectionQueryParam } from '../models';
import { toUrl } from '../functions';
import { Store } from '../../@rxjs';

/**
 * GENERIC fetch data service fot http request.
 */
export abstract class ConnectionFetchService<
    MODEL extends IData,
    QUERY extends ConnectionQueryParam
> extends ConnectionCacheService<MODEL> {
    protected httpRequestOptions: { headers?: HttpHeaders };
    private querySubscription: Subscription;

    get Query(): QUERY {
        return this.query.getValue();
    }

    get Query$(): Observable<QUERY> {
        return this.query.asObservable();
    }

    protected constructor(public config: IConnectionServiceConfig, public httpClient: HttpClient) {
        super(config);

        if (!config.sourceUrl) {
            throw new Error('IDG: FetchConnectionService => no REST source URL present.');
        }
    }
    /**
     * Data filter object
     */
    protected abstract query: Store<QUERY>;

    setQuery(d: QUERY): void {
        this.query.next(d);
    }

    /**
     * Fetch filter for item list from server
     * @param query, params to filter the filters, uses current service :Query by default
     */
    getFilter(query?: QUERY): Observable<any> {
        query = query || this.Query;
        const url = toUrl(this.config, query, query.childUrl || '/filters');
        const req = this.httpClient.get<any>(url);
        this.setWorking(true);

        return this.fetch(url, req, false).pipe(tap((o) => this.setFilter(o)));
    }

    /***
     * Q U E R Y   Z O N E
     */
    /**
     * Set query state
     * @param q, must be new QUERY
     */
    queryChanged(q: QUERY): void {
        this.setQuery(q);
    }

    pageIndexChanged(pageIndex: number): void {
        this.setQuery(this.Query.duplicate({ pageIndex }) as QUERY);
    }

    queryStringChanged(q: string): void {
        this.setQuery(this.Query.duplicate({ pageIndex: 0, q }) as QUERY);
    }

    pageSizeChanged(pageSize: number): void {
        this.setQuery(this.Query.duplicate({ pageIndex: 0, pageSize }) as QUERY);
    }

    orderByChanged(orderBy: any): void {
        this.setQuery(this.Query.duplicate({ pageIndex: 0, orderBy }) as QUERY);
    }

    baseUrlChanged(baseUrl: string): void {
        this.setQuery(this.Query.duplicate({ pageIndex: 0, baseUrl }) as QUERY);
    }

    /**
     * If set is done will subscribe to Query changes,
     * and emmit the Count$ and List$.
     * You may set to false at some moment after enabled
     * @param enabled, enable/disabled boolean
     */
    subscribeToQuery(enabled: boolean): Subscription {
        if (enabled) {
            if (!this.querySubscription) {
                this.querySubscription = this.Query$.subscribe(() => {
                    this.getCount().subscribe();
                    this.getList().subscribe();
                });
            }
        } else {
            if (this.querySubscription) this.querySubscription.unsubscribe();
        }
        return this.querySubscription;
    }

    /***
     * F E T C H I N G   Z O N E
     */

    /**
     * Fetch items list from server
     * @param query, params to filter the records, uses current service :Query by default
     * @param changeState, variable to indicate if Store changes state
     */
    getList(query?: QUERY, changeState: boolean = true): Observable<MODEL[]> {
        query = query || this.Query;
        const url = toUrl(this.config, query, query.childUrl || '');
        const req = this.httpClient.get<MODEL[]>(url, this.httpRequestOptions);
        this.setWorking(true);

        return this.fetch(url, req, (query || this.Query).useCache).pipe(
            tap((o: MODEL[]) => {
                if (changeState) {
                    if ((query || this.Query).accumulate) {
                        this.setList([...this.list.getValue(), ...o]);
                    } else {
                        this.setList(o);
                    }
                }
            })
        );
    }

    /**
     * Count current items at server
     * @param query, params to filter the record's count, uses current service :Query by default
     * @param changeState, variable to indicate if Store changes state
     */
    getCount(query?: QUERY, changeState: boolean = true): Observable<number> {
        query = query || this.Query;
        const url = toUrl(this.config, query, query.childUrl || '/count');
        const req = this.httpClient.get<number>(url, this.httpRequestOptions);
        this.setWorking(true);

        return this.fetch(url, req, (query || this.Query).useCache).pipe(
            tap((o: number) => {
                if (changeState) {
                    this.setCount(+o);
                }
            })
        );
    }

    refresh(): Observable<{ count: number; list: MODEL[] }> {
        return forkJoin({
            count: this.getCount(null, true),
            list: this.getList(null, true),
        });
    }

    /**
     * Find item at the server
     */
    get(
        id: number | string,
        defaultNew: MODEL = {} as MODEL,
        query?: QUERY,
        changeState: boolean = true
    ): Observable<MODEL> {
        query = query || this.Query;
        const url = toUrl(this.config, query, query.childUrl || `/${id}`);
        const req = this.httpClient.get<MODEL>(url, this.httpRequestOptions);
        this.setWorking(true);

        return iif(
            () => id.toString().toLocaleLowerCase() === 'new',
            of(defaultNew),
            this.fetch(url, req, (query || this.Query).useCache)
        ).pipe(
            tap((o: MODEL) => {
                if (changeState) {
                    this.setCurrent(o);
                }
            })
        );
    }
}
