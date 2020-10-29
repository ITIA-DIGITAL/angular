import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Host, NgModule, Optional, SkipSelf } from '@angular/core';

import { SelectControlComponent } from '../concerns';
import { IDGMatModule } from '../idg-mat.module';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
};

@Component({
    selector: 'idg-mat-select',
    template: `
        <mat-form-field [ngClass]="{ 'mat-form-field-invalid': formControl?.invalid }">
            <mat-label class="hint">{{ hint }}</mat-label>
            <div fxLayoutAlign="space-between center" class="form-control-container" fxLayout="row">
                <mat-select (selectionChange)="change($event.value)" [placeholder]="placeholder" [value]="value">
                    <mat-option *ngFor="let option of options" [value]="option.value">
                        {{ option.text }}
                    </mat-option>
                </mat-select>
                <ng-content></ng-content>
            </div>
            <ng-content select="mat-hint"></ng-content>
            <ng-content select="mat-error"></ng-content>
            <ng-container *ngIf="formControl?.invalid">
                <mat-error *ngIf="formControl?.errors?.required; else defaultError">Requerido</mat-error>
                <ng-template #defaultError>
                    <mat-error>Seleccione una opción</mat-error>
                </ng-template>
            </ng-container>
        </mat-form-field>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }

            mat-form-field,
            div.form-control-container {
                width: 100%;
            }

            mat-label.hint {
                padding-left: 4px;
            }
        `,
    ],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR],
})
export class SelectComponent extends SelectControlComponent<string> {
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
    declarations: [SelectComponent],
    exports: [SelectComponent],
})
export class SelectModule {}
