import { MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { Component, OnInit, Input, NgModule, forwardRef } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

import { SelectFormControlComponent } from './concerns/select-form-control.component';
import { IControlOptions } from './models/control-type-definition';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IDCheckboxListFormControlComponent),
    multi: true
};

@Component({
    selector: 'ID-checkbox-list-form-control',
    template: `
        <div fxLayout="row wrap">
            <mat-checkbox
                *ngFor="let option of options"
                [checked]="option['checked']"
                [matTooltip]="placeholder"
                (change)="toggle(option)"
                class="item"
            >
                {{ option.text }}
            </mat-checkbox>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }

            mat-form-field {
                width: 100%;
            }

            .item {
                padding: 8px 12px;
            }
        `
    ],
    providers: [IDIGITAL_FORM_VALUE_ACCESSOR]
})
export class IDCheckboxListFormControlComponent extends SelectFormControlComponent<string[]> implements OnInit {
    toggle(event: IControlOptions): void {
        const index = this.value.indexOf(event.value);
        if (index >= 0) {
            this.value.splice(index, 1);
        } else {
            this.value.push(event.value);
        }
        this.change([...this.value]);
    }
}

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatTooltipModule, MatCheckboxModule],
    declarations: [IDCheckboxListFormControlComponent],
    exports: [IDCheckboxListFormControlComponent]
})
export class IDCheckboxListFormControlModule {}
