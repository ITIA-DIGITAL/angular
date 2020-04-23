import { AbstractControlComponent } from '../concerns/abstract.control.component';
import { Component, forwardRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};

@Component({
    selector: 'idg-mat-date-picker',
    template: `
        <mat-form-field appearance="outline" floatLabel="always">
            <mat-label>{{ hint }}</mat-label>
            <input
                matInput
                type="text"
                autocomplete="off"
                (input)="change($event.target['value'])"
                (dateChange)="change($event.value)"
                [placeholder]="placeholder"
                [matDatepicker]="picker"
                [disabled]="disabled"
                [value]="value"
            />
            <mat-datepicker #picker></mat-datepicker>
            <button matSuffix class="mb-8" mat-icon-button aria-label="open datepicker" (click)="picker.open()">
                <mat-icon>calendar_today</mat-icon>
            </button>
        </mat-form-field>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }

            mat-form-field {
                width: 100%;
            }
        `
    ],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR]
})
export class DatePickerComponent extends AbstractControlComponent<string> {}

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [DatePickerComponent],
    exports: [DatePickerComponent]
})
export class DatePickerModule {}
