import { IData } from '../../../@connect/models';

export interface Tenant extends IData {
    parent_id: number;
    address: string;
    title: string;
    code: string;
    id: number;

    /**
     * For local uses
     */
    current: boolean;
}
