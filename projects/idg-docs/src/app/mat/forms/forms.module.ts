import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';

import {
    InputEmailComponentModule,
    AutocompletesModule,
    AutocompleteModule,
    DatePickerModule,
    FilePickerModule,
    TextareaModule,
    TerminalModule,
    InputUrlModule,
    IDGMatModule,
    SelectModule,
    InputModule,
    FormModule
} from '@itia-digital/material';
import { FormsRouting } from './forms.routing';
import { WrapperComponent } from './wrapper/wrapper.component';
import { DescriptiveComponent } from './descriptive/descriptive.component';

@NgModule({
    declarations: [FormsComponent, DescriptiveComponent, WrapperComponent],
    imports: [
        CommonModule,
        FormsRouting,

        IDGMatModule,
        InputModule,
        TerminalModule,
        TextareaModule,
        InputEmailComponentModule,
        SelectModule,
        AutocompleteModule,
        InputUrlModule,
        AutocompletesModule,
        DatePickerModule,
        FilePickerModule,
        FormModule
    ]
})
export class FormsModule {}
