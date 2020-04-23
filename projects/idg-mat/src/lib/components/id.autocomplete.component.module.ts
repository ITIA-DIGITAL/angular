import { FlexLayoutModule } from '@angular/flex-layout';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation, forwardRef, Component, NgModule } from '@angular/core';
import {
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule
} from '@angular/material';

import { AutocompleteFormControlComponent } from './concerns/autocomplete-form-control.component';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IDAutocompleteFormControlComponent),
    multi: true
};

@Component({
    selector: 'ID-autocomplete-form-control',
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
    providers: [IDIGITAL_FORM_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None
})
export class IDAutocompleteFormControlComponent extends AutocompleteFormControlComponent<string> {}

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatChipsModule,
        MatInputModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        FlexLayoutModule
    ],
    declarations: [IDAutocompleteFormControlComponent],
    exports: [IDAutocompleteFormControlComponent]
})
export class IDAutocompleteFormControlModule {}
