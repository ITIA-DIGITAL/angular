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
    InputModule
} from '@itia-digital/material';
import { FormsRouting } from './forms.routing';
import { DescriptiveComponent } from './descriptive/descriptive.component';

@NgModule({
    declarations: [FormsComponent, DescriptiveComponent],
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
        FilePickerModule
    ]
})
export class FormsModule {}
