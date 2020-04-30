import { NgModule } from '@angular/core';

import { IDGConnectHttpInterceptorModule } from './idg-connect.http.interceptor';
import { IDGNotificationsModule } from './@notifications/services';

@NgModule({
    declarations: [],
    imports: [IDGNotificationsModule, IDGConnectHttpInterceptorModule]
})
export class IDGConnectModule {}
