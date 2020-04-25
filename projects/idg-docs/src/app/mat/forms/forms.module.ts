import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';

import {
    IDGMatModule,
    InputEmailComponentModule,
    InputModule,
    TextareaModule,
    TerminalModule,
    SelectModule,
    AutocompleteModule,
    InputUrlModule,
    AutocompletesModule,
    DatePickerModule,
    FilePickerModule
} from '@idg/mat';
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
