import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilePickerComponent } from './file-picker.component';
import { DropFilesDirective } from './drop-files.directive';
import { IDGMatModule } from '../../idg-mat.module';

@NgModule({
    imports: [CommonModule, IDGMatModule],
    declarations: [DropFilesDirective, FilePickerComponent],
    exports: [DropFilesDirective, FilePickerComponent],
    providers: [DropFilesDirective]
})
export class FilePickerModule {}
