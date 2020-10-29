import { CommonModule } from '@angular/common';
import { Component, forwardRef, Host, NgModule, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

import { AbstractControlComponent } from '../concerns';
import { urlRegEx as regex } from '../models/regex';
import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    useExisting: forwardRef(() => InputUrlComponent),
    provide: NG_VALUE_ACCESSOR,
    multi: true,
};
const IDG_MAT_NG_VALIDATORS = {
    useExisting: forwardRef(() => InputUrlComponent),
    provide: NG_VALIDATORS,
    multi: true,
};

@Component({
    selector: 'idg-mat-input-url',
    template: `
        <mat-form-field [ngClass]="{ 'mat-form-field-invalid': formControl?.invalid }">
            <mat-label class="hint">{{ hint }}</mat-label>
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

                <ng-content select="[matSuffix]"></ng-content>
                <ng-content select="button"></ng-content>
                <ng-content select="a"></ng-content>
            </div>

            <ng-content select="mat-hint"></ng-content>
            <ng-content select="mat-error"></ng-content>
            <ng-container *ngIf="formControl?.invalid">
                <mat-error *ngIf="formControl?.errors?.required; else defaultError">Requerido</mat-error>
                <ng-template #defaultError>
                    <mat-error>URL inválida</mat-error>
                </ng-template>
            </ng-container>
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

            mat-label.hint {
                padding-left: 4px;
            }
        `,
    ],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR, IDG_MAT_NG_VALIDATORS],
})
export class InputUrlComponent extends AbstractControlComponent<string> implements Validator {
    constructor(
        @Optional()
        @SkipSelf()
        @Host()
        public controlContainer: ControlContainer
    ) {
        super(controlContainer);
    }

    validate(c: AbstractControl): any {
        if (!c.value) return null;

        return regex.test(c.value)
            ? null
            : {
                  match: true,
              };
    }
}

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [InputUrlComponent],
    exports: [InputUrlComponent],
})
export class InputUrlModule {}
