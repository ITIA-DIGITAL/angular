import { catchError, finalize } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

import { IData } from '../models';

import { IConnectionServiceConfig } from '../models';
import { StoreDataService } from './store.data.service';

export interface ICache {
    request: Observable<any>;
    created_at: number;
}

/**
 * This class wraps all the redundant request in cache
 */
export abstract class ConnectionCacheService<MODEL extends IData> extends StoreDataService<MODEL> {
    private cache: { [key: string]: ICache } = {};

    /**
     * Get live cache data
     * @param code, name space
     */
    private getCache(code: string): ICache {
        return this.cache[code];
    }

    /**
     * Get live cache data
     * @param code, name space
     * @param value, to be cached
     */
    private setCache(code: string, value: ICache): ICache {
        this.cache[code] = value;
        return this.getCache(code);
    }

    protected clear(code: string, all?: boolean): void {
        if (all) {
            for (const prop of Object.keys(this.cache)) {
                delete this.cache[prop];
            }
        } else {
            delete this.cache[code];
        }
    }

    /**
     * Handle server response error for current
     * @param code, usually url of the request
     */
    protected errorHandler(code?: string): Observable<never> {
        if (code) {
            this.clear(code);
        }
        return EMPTY;
    }

    protected constructor(public config: IConnectionServiceConfig) {
        super();

        if (!config.maxCacheAge) {
            throw new Error('IDG: ConnectionCacheService => no cache age present.');
        }

        if (!config.retryCount && config.retryCount !== 0) {
            throw new Error('IDG: ConnectionCacheService => no retry count present.');
        }
    }

    /**
     * Finalize Observable operator for current context
     */
    protected finalizeConnection() {
        return (src: Observable<any>) =>
            src.pipe(
                // retryWithBackoff(this.config.retryCount, this.config.retryDelayMs),
                catchError(() => this.errorHandler()),
                finalize(() => {
                    this.setWorking(false);
                    this.setProgress(0);
                })
            );
    }

    /**
     * Request by GET id no cache found
     * @param requestUrl, usually url of the request
     * @param httpRequest, request object, HttpClient usually
     * @param useCache, para id want to use cache if present
     */
    fetch(requestUrl: string, httpRequest: Observable<any>, useCache = true): Observable<any> {
        let cachedValue = this.getCache(requestUrl);
        if (!cachedValue || !useCache) {
            // Set cache an use new request
            cachedValue = this.setCache(requestUrl, {
                created_at: Date.now(),
                request: httpRequest.pipe(this.finalizeConnection())
            });
        } else {
            const expirationDate = Date.now() - this.config.maxCacheAge;
            if (cachedValue.created_at < expirationDate) {
                // Is expired, force request
                return this.fetch(requestUrl, httpRequest, false);
            }
            // Use not-expired cache
            console.log(`Returning cached value from: ${requestUrl}`);
        }

        return cachedValue.request;
    }
}
