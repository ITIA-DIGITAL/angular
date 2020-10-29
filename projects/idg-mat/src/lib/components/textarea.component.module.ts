import { CommonModule } from '@angular/common';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Host, NgModule, Optional, SkipSelf } from '@angular/core';

import { AbstractControlComponent } from '../concerns';
import { IDGMatModule } from '../idg-mat.module';

export const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true,
};

/**
 * Include :ngContent to fit correctly
 */
@Component({
    selector: 'idg-mat-textarea',
    template: `
        <mat-form-field [ngClass]="{ 'mat-form-field-invalid': formControl?.invalid }">
            <mat-label class="hint">{{ hint }}</mat-label>
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <ng-content select="[matPrefix]"></ng-content>

                <textarea
                    (input)="change($event.target['value'])"
                    [placeholder]="placeholder"
                    [disabled]="disabled"
                    [value]="value"
                    rows="2"
                    matInput
                ></textarea>

                <ng-content select="[matSuffix]"></ng-content>
                <ng-content select="button"></ng-content>
                <ng-content select="a"></ng-content>
            </div>
            <ng-content select="mat-hint"></ng-content>
            <ng-content select="mat-error"></ng-content>
            <ng-container *ngIf="formControl?.invalid">
                <mat-error *ngIf="formControl?.errors?.required; else defaultError">Requerido</mat-error>
                <ng-template #defaultError>
                    <mat-error>Ingrese texto</mat-error>
                </ng-template>
            </ng-container>
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

            mat-label.hint {
                padding-left: 4px;
            }
        `,
    ],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR],
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
    exports: [TextareaComponent],
})
export class TextareaModule {}
