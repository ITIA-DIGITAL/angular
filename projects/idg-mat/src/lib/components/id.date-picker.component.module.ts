import { FormControlComponent } from './concerns/form-control.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule
} from '@angular/material';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IDDatePickerFormControlComponent),
    multi: true
};

@Component({
    selector: 'ID-date-picker-form-control',
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
    providers: [IDIGITAL_FORM_VALUE_ACCESSOR]
})
export class IDDatePickerFormControlComponent extends FormControlComponent<string> {}

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatDatepickerModule
    ],
    declarations: [IDDatePickerFormControlComponent],
    exports: [IDDatePickerFormControlComponent]
})
export class IDDatePickerFormControlModule {}
