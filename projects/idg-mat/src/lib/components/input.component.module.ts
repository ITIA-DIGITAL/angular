import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Host, NgModule, Optional, SkipSelf } from '@angular/core';

import { IDGMatModule } from '../idg-mat.module';
import { AbstractControlComponent } from '../concerns';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    useExisting: forwardRef(() => InputComponent),
    provide: NG_VALUE_ACCESSOR,
    multi: true,
};

@Component({
    selector: 'idg-mat-input',
    template: `
        <mat-form-field appearance="outline" floatLabel="always">
            <mat-label>{{ hint }}</mat-label>
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <ng-content select="[matPrefix]"></ng-content>

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
                    <mat-error *ngIf="formControl?.errors?.match">Invalid email.</mat-error>
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
        `,
    ],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR],
})
export class InputComponent extends AbstractControlComponent<string> {
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
    imports: [CommonModule, FlexLayoutModule, IDGMatModule],
    declarations: [InputComponent],
    exports: [InputComponent],
})
export class InputModule {}
