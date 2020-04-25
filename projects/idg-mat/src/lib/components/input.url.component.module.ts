import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { Component, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractControlComponent } from '../concerns';
import { urlRegEx as regex } from '../models/regex';
import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputUrlComponent),
    multi: true
};
const IDG_MAT_NG_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputUrlComponent),
    multi: true
};

@Component({
    selector: 'idg-mat-input-url',
    template: `
        <mat-form-field appearance="outline" floatLabel="always">
            <mat-label>{{ hint }}</mat-label>
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <mat-icon matPrefix>public</mat-icon>

                <div fxFlex fxLayout="column">
                    <input
                        matInput
                        autocomplete="off"
                        (input)="change($event.target['value'])"
                        [placeholder]="placeholder"
                        [disabled]="disabled"
                        [value]="value"
                    />
                    <ng-content select="mat-hint"></ng-content>
                    <ng-content select="mat-error"></ng-content>
                    <mat-error *ngIf="control?.errors?.match">Invalid</mat-error>
                </div>

                <ng-content select="[matSuffix]"></ng-content>
                <ng-content select="button"></ng-content>
                <ng-content select="a"></ng-content>
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
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR, IDG_MAT_NG_VALIDATORS]
})
export class InputUrlComponent extends AbstractControlComponent<string> implements Validator {
    validate(c: AbstractControl): any {
        if (!c.value) return null;

        return regex.test(c.value)
            ? null
            : {
                  match: true
              };
    }
}

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [InputUrlComponent],
    exports: [InputUrlComponent]
})
export class InputUrlModule {}
