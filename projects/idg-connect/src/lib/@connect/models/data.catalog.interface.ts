import { IData } from './data.interface';

export interface IDataCatalog extends IData {
    id: string | number;
    title: string;
    code: string;

    toString(): string;
}
