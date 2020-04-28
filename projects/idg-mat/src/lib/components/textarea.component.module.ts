import { CommonModule } from '@angular/common';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Host, NgModule, Optional, SkipSelf } from '@angular/core';

import { AbstractControlComponent } from '../concerns';
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
                <ng-content select="[matPrefix]"></ng-content>

                <div fxFlex fxLayout="column">
                    <textarea
                        (input)="change($event.target['value'])"
                        [placeholder]="placeholder"
                        [disabled]="disabled"
                        [value]="value"
                        rows="2"
                        matInput
                    ></textarea>
                    <ng-content select="mat-hint"></ng-content>
                    <ng-content select="mat-error"></ng-content>
                </div>

                <ng-content select="[matSuffix]"></ng-content>
                <ng-content select="button"></ng-content>
                <ng-content select="a"></ng-content>
            </div>
        </mat-form-field>
    `,
    styles: [
        `
            :host,
            idg-mat-textarea {
                width: 100%;
            }

            mat-form-field {
                width: 100%;
            }
        `
    ],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR]
})
export class TextareaComponent extends AbstractControlComponent<string> {
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
    declarations: [TextareaComponent],
    exports: [TextareaComponent]
})
export class TextareaModule {}
