import { IData } from './data.interface';

export interface IDataFilter extends IData {
    id: string | number;
    title: string;
}
