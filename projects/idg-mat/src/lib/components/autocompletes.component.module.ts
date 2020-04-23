import { ViewEncapsulation, Component, NgModule, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AutocompleteControlComponent } from '../concerns/autocomplete.control.component';
import { IControlOptions } from '../models/control.options.interface';
import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompletesComponent),
    multi: true
};
@Component({
    selector: 'idg-mat-autocompletes',
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
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None
})
export class AutocompletesComponent extends AutocompleteControlComponent<string[]> implements OnInit, OnDestroy {
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
    imports: [CommonModule, IDGMatModule],
    declarations: [AutocompletesComponent],
    exports: [AutocompletesComponent]
})
export class AutocompletesModule {}