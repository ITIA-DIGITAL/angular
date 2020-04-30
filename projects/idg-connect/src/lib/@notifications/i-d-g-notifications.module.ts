import { NgModule } from '@angular/core';

import { IDGNotificationComponent } from './components';
import { IDGNotificationsService } from './services';

@NgModule({
    declarations: [IDGNotificationComponent],
    providers: [IDGNotificationsService],
    exports: [IDGNotificationComponent]
})
export class IDGNotificationsModule {}
