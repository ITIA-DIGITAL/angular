import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { IDCheckboxListFormControlModule } from '../id.checkbox-list.component.module';
import { IDAutocompletesFormControlModule } from '../id.autocompletes.component.module';
import { IDAutocompleteFormControlModule } from '../id.autocomplete.component.module';
import { IDEmailInputFormControlModule } from '../id.email.input.component.module';
import { IDDatePickerFormControlModule } from '../id.date-picker.component.module';
import { IDUrlInputFormControlModule } from '../id.url.input.component.module';
import { TextareaFormControlModule } from '../id.textarea.component.module';
import { CheckboxFormControlModule } from '../id.checkbox.component.module';
import { IDSelectFormControlModule } from '../id.select.component.module';
import { IDInputFormControlModule } from '../id.input.component.module';
import { DropFilesModule } from '../id-file-picker/file-picker.module';
import { IDFormControlComponent } from './i-d-form-control.component';
import { MatDividerModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,

        ReactiveFormsModule,
        FlexModule,

        DropFilesModule,
        IDInputFormControlModule,
        CheckboxFormControlModule,
        TextareaFormControlModule,
        IDSelectFormControlModule,
        IDEmailInputFormControlModule,
        IDUrlInputFormControlModule,
        IDDatePickerFormControlModule,
        IDCheckboxListFormControlModule,
        IDAutocompleteFormControlModule,
        IDAutocompletesFormControlModule,
        MatDividerModule
    ],
    declarations: [IDFormControlComponent],
    exports: [IDFormControlComponent]
})
export class IDFormControlModule {}
