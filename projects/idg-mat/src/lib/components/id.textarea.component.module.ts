import { CommonModule } from '@angular/common';
import { Component, forwardRef, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormControlComponent } from './concerns/form-control.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaFormControlComponent),
    multi: true
};

@Component({
    selector: 'ID-textarea-form-control',
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
    providers: [IDIGITAL_FORM_VALUE_ACCESSOR]
})
export class TextareaFormControlComponent extends FormControlComponent<string> {}

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatFormFieldModule, MatInputModule],
    declarations: [TextareaFormControlComponent],
    exports: [TextareaFormControlComponent]
})
export class TextareaFormControlModule {}
