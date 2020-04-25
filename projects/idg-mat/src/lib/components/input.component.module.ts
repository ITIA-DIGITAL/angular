import { Component, forwardRef, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IDGMatModule } from '../idg-mat.module';
import { AbstractControlComponent } from '../concerns/abstract.control.component';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
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
                    <mat-error *ngIf="control?.errors?.match">Invalid email. </mat-error>
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
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR]
})
export class InputComponent extends AbstractControlComponent<string> {}

@NgModule({
    imports: [CommonModule, FlexLayoutModule, IDGMatModule],
    declarations: [InputComponent],
    exports: [InputComponent]
})
export class InputModule {}
