import { NgModule } from '@angular/core';

import { IDGConnectHttpInterceptorModule } from './idg-connect.http.interceptor';
import { IDGNotificationsModule } from './@notifications/i-d-g-notifications.module';

@NgModule({
    declarations: [],
    imports: [IDGNotificationsModule, IDGConnectHttpInterceptorModule]
})
export class IDGConnectModule {}
