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
    SelectModule,
    InputModule,
    IDGControlModule,
    IDGFormModule,
    IDGMatModule
} from '@itia-digital/material';
import { FormsRouting } from './forms.routing';
import { WrapperComponent } from './wrapper/wrapper.component';
import { DescriptiveComponent } from './descriptive/descriptive.component';

@NgModule({
    declarations: [FormsComponent, DescriptiveComponent, WrapperComponent],
    imports: [
        CommonModule,
        FormsRouting,

        InputEmailComponentModule,
        AutocompletesModule,
        AutocompleteModule,
        DatePickerModule,
        FilePickerModule,
        TerminalModule,
        TextareaModule,
        InputUrlModule,
        SelectModule,
        InputModule,
        IDGControlModule,
        IDGFormModule,
        IDGMatModule
    ]
})
export class FormsModule {}
