import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, NgModule } from '@angular/core';

import { AbstractControlComponent } from '../concerns/abstract.control.component';
import { IDGMatModule } from '../idg-mat.module';

export const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
};

/**
 * Include :ngContent to fit correctly
 */
@Component({
    selector: 'idg-mat-textarea',
    template: `
        <mat-form-field appearance="outline" floatLabel="always">
            <mat-label>{{ hint }}</mat-label>
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <textarea
                    (input)="change($event.target['value'])"
                    [placeholder]="placeholder"
                    [disabled]="disabled"
                    [value]="value"
                    rows="1"
                    matInput
                ></textarea>
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
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR]
})
export class TextareaComponent extends AbstractControlComponent<string> {}

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [TextareaComponent],
    exports: [TextareaComponent]
})
export class TextareaModule {}
