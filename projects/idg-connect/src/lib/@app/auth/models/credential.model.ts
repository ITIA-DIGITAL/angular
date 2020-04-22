import { ConnectionQueryParam, IData } from '../../../@connect/models';
import { Tenant } from '../../tenant/models/tenant.model';
import { CredentialStatus } from '../enums/status.enum';

export interface Credential extends IData {
    status: CredentialStatus;
    tenants: Tenant[];
    username: string;
    profile: string;
    email: string;
    pin: string;
    id: number;
}

export class CredentialQuery extends ConnectionQueryParam {}
