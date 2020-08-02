import { ConnectionQueryParam, IConnectionServiceConfig } from '../models';
import { toQueryParams } from './toQueryParams.function';

export const reserved = [null, undefined, 'orderBy', 'format', ''];

/**
 * Convert params to complete formed url
 * Handle REST API context format:
 *      e.g. /parent/:parent_id/child/:child_id
 * (Important integrated params should be panted as :format)
 *
 * IMPORTANT:
 *      [  If q? has :baseUrlLL => it will override the base url of the service.  ]
 * @param config, service connection details to handle url
 * @param q, Query object
 * @param childRoute, nested route to include on URL
 */

export function toUrl(config: IConnectionServiceConfig, q: ConnectionQueryParam, childRoute?: string): string {
    let url = `${config.serverUrl}${q.baseUrl ? q.baseUrl : config.sourceUrl}${childRoute || ''}${q.format}`;

    if (q) {
        for (const prop of Object.keys(q)) {
            if (isReservedForUrl(prop) && isValidValueForUrl(q[prop])) {
                if (q[prop]._isAMomentObject) {
                    url = url.replace(`:${prop}`, q[prop].format(config.dateFormat));
                } else {
                    url = url.replace(`:${prop}`, q[prop]);
                }
            }
        }
    }

    return url + (q && !q.queryDisabled ? toQueryParams(q, config.dateFormat) : '');
}

export function isReservedForUrl(o: string) {
    return o !== 'orderBy' && o !== 'format' && o !== '';
}

export function isValidValueForUrl(o: any) {
    return o !== null && o !== undefined;
}
