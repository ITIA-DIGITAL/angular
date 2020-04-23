import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

import { InputEmailComponentModule } from '../input.email.component.module';
import { AutocompletesModule } from '../autocompletes.component.module';
import { CheckboxListModule } from '../checkbox-list.component.module';
import { AutocompleteModule } from '../autocomplete.component.module';
import { DatePickerModule } from '../date-picker.component.module';
import { InputUrlModule } from '../input.url.component.module';
import { TextareaModule } from '../textarea.component.module';
import { CheckboxModule } from '../checkbox.component.module';
import { SelectModule } from '../select.component.module';
import { InputModule } from '../input.component.module';
import { ControlComponent } from './control.component';
import { FilePickerModule } from '../file-picker';
import { IDGMatModule } from '../../idg-mat.module';

@NgModule({
    imports: [
        CommonModule,

        IDGMatModule,

        InputEmailComponentModule,
        AutocompletesModule,
        CheckboxListModule,
        AutocompleteModule,
        DatePickerModule,
        FilePickerModule,
        CheckboxModule,
        InputUrlModule,
        TextareaModule,
        SelectModule,
        InputModule
    ],
    declarations: [ControlComponent],
    exports: [ControlComponent]
})
export class ControlModule {}
