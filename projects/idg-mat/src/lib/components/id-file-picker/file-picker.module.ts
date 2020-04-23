import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import {
    MatProgressBarModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule
} from '@angular/material';

import { DropFilesDirective } from './drop-files.directive';
import { FilePickerFormControlComponent } from './file-picker.component';

@NgModule({
    imports: [
        CommonModule,

        MatProgressBarModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        FlexModule
    ],
    declarations: [DropFilesDirective, FilePickerFormControlComponent],
    exports: [DropFilesDirective, FilePickerFormControlComponent],
    providers: [DropFilesDirective]
})
export class DropFilesModule {}
