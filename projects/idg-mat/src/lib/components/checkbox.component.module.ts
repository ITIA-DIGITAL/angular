import { CommonModule } from '@angular/common';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Host, NgModule, Optional, SkipSelf } from '@angular/core';

import { AbstractControlComponent } from '../concerns';
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
export class CheckboxComponent extends AbstractControlComponent<boolean> {
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
    declarations: [CheckboxComponent],
    exports: [CheckboxComponent]
})
export class CheckboxModule {}
