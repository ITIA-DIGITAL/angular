import { InjectionToken } from '@angular/core';
import { IConnectionConfig } from './models';

export const DEFAULT_DELAY = 1000;
export const DEFAULT_BACKOFF = 1000;
export const DEFAULT_MAX_RETRIES = 5;
export const DEFAULT_MAX_CACHE_AGE = 21000;
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
export const DEFAULT_STORE_PREFIX = 'idg-';

export const DEFAULT_CONFIG: IConnectionConfig = {
    storagePrefix: DEFAULT_STORE_PREFIX,
    maxCacheAge: DEFAULT_MAX_CACHE_AGE,
    retryCount: DEFAULT_MAX_RETRIES,
    dateFormat: DEFAULT_DATE_FORMAT,
    retryDelayMs: DEFAULT_DELAY,
    serverUrl: null,
};

export const CONNECTION_CONFIG = new InjectionToken<IConnectionConfig>('CONNECTION_CONFIG');
