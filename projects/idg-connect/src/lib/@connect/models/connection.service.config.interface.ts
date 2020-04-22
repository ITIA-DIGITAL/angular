import { IConnectionConfig } from './connection.config.interface';

export interface IConnectionServiceConfig extends IConnectionConfig {
    /**
     * Source Url for rest:
     * GET, POST, PUT/PATCH & DELETE
     */
    sourceUrl?: string;
    /**
     * Whe API / server address
     */
    serverUrl: string;
    /**
     * Times to retry http fetch / cached function
     */
    retryCount: number;
    /**
     * Times to retry delay in milliseconds
     */
    retryDelayMs: number;
    /**
     * Cache age value, 2100 milliseconds is OK
     */
    maxCacheAge: number;
    /**
     * Principally useful to format at URL request
     */
    dateFormat: any;
}
