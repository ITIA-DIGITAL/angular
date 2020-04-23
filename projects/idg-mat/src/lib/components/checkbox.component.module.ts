import { Component, forwardRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AbstractControlComponent } from '../concerns/abstract.control.component';
import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
};

@Component({
    selector: 'idg-mat-checkbox',
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
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR]
})
export class CheckboxComponent extends AbstractControlComponent<boolean> {}

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [CheckboxComponent],
    exports: [CheckboxComponent]
})
export class CheckboxModule {}
