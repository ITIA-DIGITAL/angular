import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { Component, forwardRef, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormControlComponent } from './concerns/form-control.component';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IDInputFormControlComponent),
    multi: true
};

@Component({
    selector: 'ID-input-form-control',
    template: `
        <mat-form-field appearance="outline" floatLabel="always">
            <mat-label>{{ hint }}</mat-label>
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <input
                    matInput
                    autocomplete="off"
                    (input)="change($event.target['value'])"
                    [placeholder]="placeholder"
                    [disabled]="disabled"
                    [value]="value"
                />
                <ng-content></ng-content>
            </div>
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
export class IDInputFormControlComponent extends FormControlComponent<string> {}

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatFormFieldModule, MatInputModule],
    declarations: [IDInputFormControlComponent],
    exports: [IDInputFormControlComponent]
})
export class IDInputFormControlModule {}
