import { CommonModule } from '@angular/common';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Host, NgModule, Optional, SkipSelf } from '@angular/core';

import { AbstractControlComponent } from '../concerns';
import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    useExisting: forwardRef(() => DatePickerComponent),
    provide: NG_VALUE_ACCESSOR,
    multi: true,
};

@Component({
    selector: 'idg-mat-date-picker',
    template: `
        <mat-form-field [ngClass]="{ 'mat-form-field-invalid': formControl?.invalid }">
            <mat-label class="hint">{{ hint }}</mat-label>
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
                </div>
                <mat-datepicker #picker></mat-datepicker>
                <button matSuffix class="mb-8" mat-icon-button aria-label="open datepicker" (click)="picker.open()">
                    <mat-icon>calendar_today</mat-icon>
                </button>

                <ng-content select="[matSuffix]"></ng-content>
                <ng-content select="button"></ng-content>
                <ng-content select="a"></ng-content>
            </div>
            <ng-content select="mat-hint"></ng-content>
            <ng-content select="mat-error"></ng-content>
            <ng-container *ngIf="formControl?.invalid">
                <mat-error *ngIf="formControl?.errors?.required; else defaultError">Requerido</mat-error>
                <ng-template #defaultError>
                    <mat-error>Fecha inválida</mat-error>
                </ng-template>
            </ng-container>
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

            mat-label.hint {
                padding-left: 4px;
            }
        `,
    ],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR],
})
export class DatePickerComponent extends AbstractControlComponent<string> {
    constructor(
        @Optional()
        @SkipSelf()
        @Host()
        public controlContainer: ControlContainer
    ) {
        super(controlContainer);
    }
}

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [DatePickerComponent],
    exports: [DatePickerComponent],
})
export class DatePickerModule {}
