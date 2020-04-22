import { IData } from '../../../@connect/models';

export interface Permission extends IData {
    permissionable_id: number | string;
    permissionable_type: string;
}
