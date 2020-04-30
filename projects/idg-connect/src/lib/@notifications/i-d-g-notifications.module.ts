import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { IDGNotificationComponent } from './components';
import { IDGNotificationsService } from './services';

@NgModule({
    imports: [MatButtonModule, MatIconModule, FlexModule],
    declarations: [IDGNotificationComponent],
    providers: [IDGNotificationsService],
    exports: [IDGNotificationComponent]
})
export class IDGNotificationsModule {}
