import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Component, Inject, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { NotificationType } from '../enums';
import { Notification } from '../models';

@Component({
    selector: 'idg-connect-message',
    template: `
        <div fxLayout="row" fxLayoutAlign="space-between center">
            <mat-icon fxFlex="10%" [color]="color">{{ data.icon }}</mat-icon>
            <span fxFlex>{{ data.message }}</span>
            <button mat-button fxFlex="10%" [color]="color">
                {{ data.action }}
            </button>
        </div>
    `
})
export class IDGNotificationComponent {
    color: ThemePalette;

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Notification) {
        switch (data.type) {
            case NotificationType.Remote5XX:
            case NotificationType.Remote400:
            case NotificationType.Error:
                this.color = 'warn';
                break;
            case NotificationType.Remote2XX:
            case NotificationType.Success:
                this.color = 'accent';
                break;
            case NotificationType.Remote401:
            case NotificationType.Unknown:
                this.color = 'primary';
                break;
            default:
                this.color = undefined;
        }
    }
}

@NgModule({
    imports: [CommonModule, MatButtonModule, MatIconModule, FlexModule],
    declarations: [IDGNotificationComponent],
    exports: [IDGNotificationComponent]
})
export class IDGNotificationComponentModule {}
