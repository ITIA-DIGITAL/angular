import { ViewEncapsulation, forwardRef, Component, NgModule, Optional, SkipSelf, Host } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AutocompleteControlComponent } from '../concerns';
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
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <ng-content select="[matPrefix]"></ng-content>
                <div fxFlex fxLayout="column">
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
                    <ng-content select="mat-hint"></ng-content>
                    <ng-content select="mat-error"></ng-content>
                </div>

                <ng-content select="[matSuffix]"></ng-content>
                <ng-content select="button"></ng-content>
                <ng-content select="a"></ng-content>

                <button mat-icon-button matSuffix *ngIf="!!value" (click)="onClear()">
                    <mat-icon>clear</mat-icon>
                </button>
            </div>
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
            :host,
            idg-mat-autocomplete {
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
export class AutocompleteComponent extends AutocompleteControlComponent<string> {
    constructor(
        @Optional()
        @SkipSelf()
        @Host()
        public controlContainer: ControlContainer
    ) {
        super(controlContainer);
    }

    onClear(): void {
        this.onSelected({ text: '', value: null, checked: false });
    }
}

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [AutocompleteComponent],
    exports: [AutocompleteComponent]
})
export class AutocompleteModule {}
