import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { Component, forwardRef, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { FormControlComponent } from './concerns/form-control.component';
import { url as regex } from './models/regex';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IDUrlInputFormControlComponent),
    multi: true
};
const IDIGITAL_NG_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => IDUrlInputFormControlComponent),
    multi: true
};

@Component({
    selector: 'ID-url-input-form-control',
    template: `
        <mat-form-field appearance="outline" floatLabel="always">
            <mat-label>{{ hint }}</mat-label>
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <mat-icon matPrefix>public</mat-icon>
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
    providers: [IDIGITAL_FORM_VALUE_ACCESSOR, IDIGITAL_NG_VALIDATORS]
})
export class IDUrlInputFormControlComponent extends FormControlComponent<string> implements Validator {
    validate(c: AbstractControl): any {
        return regex.test(c.value)
            ? null
            : {
                  url: {
                      valid: false
                  }
              };
    }
}

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatFormFieldModule, MatInputModule, MatIconModule],
    declarations: [IDUrlInputFormControlComponent],
    exports: [IDUrlInputFormControlComponent]
})
export class IDUrlInputFormControlModule {}
