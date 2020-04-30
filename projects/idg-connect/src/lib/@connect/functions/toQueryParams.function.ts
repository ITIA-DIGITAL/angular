import { isArrayLike } from 'rxjs/internal-compatibility';
import { DEFAULT_DATE_FORMAT } from '../config';

/**
 * Convert params to query params part of a url string
 * Note:
 *  - Reserved words: [ :pageIndex, :pageSize, :useCache, :serverUrl, :format, :orderBy ]
 */
export function toQueryParams(param: any, dateFormat?: string): string {
    const q = [];
    for (const prop of Object.keys(param)) {
        if (
            param[prop] !== undefined &&
            param[prop] !== null &&
            param[prop] !== '' &&
            prop !== 'pageIndex' &&
            prop !== 'pageSize' &&
            prop !== 'childUrl' &&
            prop !== 'useCache' &&
            prop !== 'baseUrl' &&
            prop !== 'format' &&
            prop !== 'orderBy'
        ) {
            if (param[prop].toString().toLowerCase() !== 'false') {
                try {
                    if (param[prop]._isAMomentObject) {
                        q.push(prop.toLowerCase() + '=' + param[prop].format(dateFormat || DEFAULT_DATE_FORMAT));
                    } else if (isArrayLike(param[prop]) && param[prop]['foreEach']) {
                        const arr = [];
                        param[prop].forEach((value: string) => {
                            arr.push(`${prop}[]=${value}`);
                        });
                        q.push(arr.join('&'));
                    } else {
                        q.push(prop.toLowerCase() + '=' + param[prop]);
                    }
                } catch (e) {
                    q.push(prop.toLowerCase() + '=' + param[prop]);
                }
            }
        } else {
            if (prop === 'orderBy') {
                q.push('order_by=' + JSON.stringify(param[prop]));
            } else if (prop === 'pageIndex') {
                q.push('page_index=' + param[prop]);
            } else if (prop === 'pageSize') {
                q.push('page_size=' + param[prop]);
            }
        }
    }

    return `?${q.join('&')}`;
}
