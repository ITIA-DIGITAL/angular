import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectionService, CredentialQuery, DEFAULT_CONFIG, Store, Credential } from '@itia-digital/connect';

@Injectable()
export class ConnectService extends ConnectionService<Credential, CredentialQuery> {
    protected query = new Store<CredentialQuery>(new CredentialQuery({ pageSize: 5 }));

    constructor(httpClient: HttpClient) {
        super(
            {
                ...DEFAULT_CONFIG,
                serverUrl: 'http://localhost:3000/v1',
                sourceUrl: '/sys/tenants'
            },
            httpClient
        );
    }
}
