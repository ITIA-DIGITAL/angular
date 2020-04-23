import { Component, OnInit, NgModule, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SelectControlComponent } from '../concerns/select.control.component';
import { IControlOptions } from '../models/control.options.interface';
import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxListComponent),
    multi: true
};

@Component({
    selector: 'idg-mat-checkbox-list',
    template: `
        <div fxLayout="row wrap">
            <mat-checkbox
                *ngFor="let option of options"
                [checked]="option.checked"
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
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR]
})
export class CheckboxListComponent extends SelectControlComponent<string[]> implements OnInit {
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
    imports: [CommonModule, IDGMatModule],
    declarations: [CheckboxListComponent],
    exports: [CheckboxListComponent]
})
export class CheckboxListModule {}
