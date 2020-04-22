import { NgModule } from '@angular/core';

import { NotificationsModule } from './@notifications/notifications.module';
import { IDGConnectHttpInterceptorModule } from './idg-connect.http.interceptor';

@NgModule({
    declarations: [],
    imports: [NotificationsModule, IDGConnectHttpInterceptorModule]
})
export class IDGConnectModule {}
