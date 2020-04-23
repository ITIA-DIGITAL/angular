import { MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Component, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlComponent } from './concerns/form-control.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxFormControlComponent),
    multi: true
};

@Component({
    selector: 'ID-checkbox-form-control',
    template: `
        <mat-checkbox
            (change)="change($event.checked)"
            [matTooltip]="placeholder"
            [disabled]="disabled"
            [checked]="value"
        >
            {{ hint }}
        </mat-checkbox>
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
export class CheckboxFormControlComponent extends FormControlComponent<boolean> {}

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatTooltipModule, MatCheckboxModule],
    declarations: [CheckboxFormControlComponent],
    exports: [CheckboxFormControlComponent]
})
export class CheckboxFormControlModule {}
