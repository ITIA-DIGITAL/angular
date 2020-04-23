import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation, Component, NgModule, OnDestroy, OnInit, forwardRef } from '@angular/core';
import {
    MatChipInputEvent,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatAutocompleteSelectedEvent
} from '@angular/material';

import { AutocompleteFormControlComponent } from './concerns/autocomplete-form-control.component';
import { IControlOptions } from './models/control-type-definition';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IDAutocompletesFormControlComponent),
    multi: true
};
@Component({
    selector: 'ID-autocompletes-form-control',
    template: `
        <mat-form-field appearance="outline" floatLabel="always" class="w-100-p autocomplete">
            <mat-label>{{ hint }}</mat-label>
            <mat-chip-list #chipList>
                <mat-chip
                    *ngFor="let s of value"
                    [selectable]="selectable && !disabled"
                    [removable]="removable && !disabled"
                    (removed)="removeChip(s)"
                >
                    {{ s }}
                    <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
                </mat-chip>
                <input
                    #filter
                    matInput
                    #trigger="matAutocompleteTrigger"
                    [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                    [matChipInputAddOnBlur]="addOnBlur"
                    (matChipInputTokenEnd)="addChip($event); ($event.st)"
                    [matChipInputFor]="chipList"
                    [placeholder]="placeholder"
                    [matAutocomplete]="auto"
                    [disabled]="disabled"
                    (focusout)="onFocusOut()"
                    autocomplete="off"
                />
                <ng-content select="autocompletes-content"></ng-content>
            </mat-chip-list>
            <mat-autocomplete #auto="matAutocomplete" (optionSelected)="onSelected($event)">
                <mat-option *ngFor="let c of options" [value]="c">
                    {{ c.value }} <small>{{ c.text }}</small>
                </mat-option>
            </mat-autocomplete>
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
    providers: [IDIGITAL_FORM_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None
})
export class IDAutocompletesFormControlComponent extends AutocompleteFormControlComponent<string[]>
    implements OnInit, OnDestroy {
    ngOnInit(): void {
        super.ngOnInit();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    onSelected(event: MatAutocompleteSelectedEvent | IControlOptions): void {
        const option = event instanceof MatAutocompleteSelectedEvent ? (event.option.value as IControlOptions) : event;

        this.value.push(option.value);
        this.value = [...new Set(this.value)];
        this.change(this.value);
    }

    onFocusOut(): void {
        this.filter.nativeElement.value = '';
    }

    addChip(event: MatChipInputEvent): void {
        if (!this.forceSelection) {
            const q = event.input.value;
            if (q) {
                this.onSelected({ value: q, text: q });
            }
        }
        this.filter.nativeElement.value = '';
    }

    removeChip(c: string): void {
        this.change((this.value = this.value.filter(s => s !== c)));
    }
}

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatInputModule,
        MatChipsModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatAutocompleteModule
    ],
    declarations: [IDAutocompletesFormControlComponent],
    exports: [IDAutocompletesFormControlComponent]
})
export class IDAutocompletesFormControlModule {}
