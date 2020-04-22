export interface IConnectionConfig {
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
    /**
     * Storage Prefix to find stored data
     */
    storagePrefix: string;
}
