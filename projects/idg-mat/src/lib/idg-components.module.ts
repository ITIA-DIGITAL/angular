import { NgModule } from '@angular/core';
import {
    InputEmailComponentModule,
    AutocompletesModule,
    CheckboxListModule,
    AutocompleteModule,
    DatePickerModule,
    FilePickerModule,
    InputUrlModule,
    TextareaModule,
    CheckboxModule,
    ControlModule,
    SelectModule,
    InputModule,
    FormModule
} from './components';

@NgModule({
    exports: [
        InputEmailComponentModule,
        AutocompletesModule,
        CheckboxListModule,
        AutocompleteModule,
        DatePickerModule,
        FilePickerModule,
        InputUrlModule,
        CheckboxModule,
        TextareaModule,
        ControlModule,
        SelectModule,
        InputModule,
        FormModule
    ]
})
export class IDGComponentsModule {}
