import { ViewEncapsulation, forwardRef, Component, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AutocompleteControlComponent } from '../concerns/autocomplete.control.component';
import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
};

@Component({
    selector: 'idg-mat-autocomplete',
    template: `
        <mat-form-field appearance="outline" floatLabel="always">
            <mat-label>{{ hint }}</mat-label>
            <input
                #filter
                matInput
                type="text"
                autocomplete="off"
                [value]="valueText"
                [placeholder]="placeholder"
                [matAutocomplete]="autocomplete"
                (focusout)="$event.target.value = valueText"
            />
        </mat-form-field>

        <mat-autocomplete
            #autocomplete="matAutocomplete"
            [displayWith]="displayFn"
            (optionSelected)="onSelected($event)"
        >
            <mat-option *ngFor="let option of options" [value]="option">
                {{ option.text }}
            </mat-option>
        </mat-autocomplete>
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
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent extends AutocompleteControlComponent<string> {}

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [AutocompleteComponent],
    exports: [AutocompleteComponent]
})
export class AutocompleteModule {}
