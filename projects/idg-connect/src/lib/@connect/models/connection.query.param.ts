import { toQueryParams } from '../functions';
import { Format } from '../enums';

export class ConnectionQueryParam {
    readonly baseUrl: string;
    pageIndex: number | string;
    pageSize: number | string;
    accumulate: boolean;
    orderBy: object;
    format: Format;
    token: string;
    q: string;

    useCache = true;

    constructor(o: ConnectionQueryParam | any) {
        this.format = o.format || Format.json;
        this.pageIndex = o.pageIndex || 0;
        this.pageSize = o.pageSize || 10;
        this.orderBy = o.orderBy || null;
        this.accumulate = o.accumulate;
        this.baseUrl = o.baseUrl || '';
        this.useCache = o.useCache;
        this.token = o.token || '';
        this.q = o.q || '';
    }

    /**
     * Convert params to query params part of a url string
     */
    toQueryParams(): string {
        return toQueryParams(this);
    }
}
