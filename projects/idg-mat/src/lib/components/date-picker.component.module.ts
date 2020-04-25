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
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <ng-content select="[matPrefix]"></ng-content>
                <div fxFlex fxLayout="column">
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
                    <ng-content select="mat-hint"></ng-content>
                    <ng-content select="mat-error"></ng-content>
                    <mat-error *ngIf="control?.errors?.match">Invalid email. </mat-error>
                </div>
                <mat-datepicker #picker></mat-datepicker>
                <button matSuffix class="mb-8" mat-icon-button aria-label="open datepicker" (click)="picker.open()">
                    <mat-icon>calendar_today</mat-icon>
                </button>

                <ng-content select="[matSuffix]"></ng-content>
                <ng-content select="button"></ng-content>
                <ng-content select="a"></ng-content>
            </div>
        </mat-form-field>
    `,
    styles: [
        `
            :host,
            idg-mat-date-picker {
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
