import { ViewEncapsulation, ElementRef, forwardRef, Component, ViewChild, OnInit } from '@angular/core';
import { Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl } from '@angular/forms';

import { FormControlComponent } from '../concerns/form-control.component';
import { DropFilesDirective } from './drop-files.directive';
import { fileType, FileTypes } from '../models/file-type';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilePickerFormControlComponent),
    multi: true
};

const IDIGITAL_NG_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => FilePickerFormControlComponent),
    multi: true
};

/**
 * Validation with special thanks to:
 * https://netbasal.com/adding-integrated-validation-to-custom-form-controls-in-angular-dc55e49639ae
 */

@Component({
    selector: 'ID-file-picker-form-control',
    templateUrl: './file-picker.component.html',
    styleUrls: ['./file-picker.component.scss'],
    providers: [IDIGITAL_FORM_VALUE_ACCESSOR, IDIGITAL_NG_VALIDATORS],
    encapsulation: ViewEncapsulation.None
})
export class FilePickerFormControlComponent extends FormControlComponent<File[]> implements Validator, OnInit {
    fileType: FileTypes;
    filesCount = 1;

    @ViewChild('fileUpload', { static: true }) $fileUpload: ElementRef<HTMLInputElement>;

    fileItems: File[] = [];
    fileTypeConfig = fileType;
    isOverDragAndDrop = false;
    iconFileType: string;

    constructor(public drop: DropFilesDirective) {
        super();
    }

    ngOnInit() {
        super.ngOnInit();

        this.iconFileType = this.fileTypeConfig[this.fileType]
            ? this.fileTypeConfig[this.fileType].icon
            : this.fileTypeConfig.default.icon;

        this.filesCount = this.config.filesCount;
        this.fileType = this.config.fileType;

        this.$fileUpload.nativeElement.onchange = () => {
            const userFileList: FileList = this.$fileUpload.nativeElement.files;

            this.fileItems = [
                ...this.fileItems,
                ...Object.getOwnPropertyNames(userFileList)
                    .map(prop => userFileList[prop] as File)
                    .filter(fileTmp => this.drop.fileIsValid(fileTmp))
            ];
            this.change(this.fileItems);
        };
    }

    loadFiles(): void {
        this.$fileUpload.nativeElement.click();
    }

    resetUpload() {
        this.fileItems = [];
        this.change(this.fileItems);
    }

    removeFile(itemToRemove: File) {
        this.fileItems = this.fileItems.filter(item => item !== itemToRemove);
        this.change(this.fileItems);
    }

    validate(c: AbstractControl) {
        const isNotValid = this.filesCount < this.fileItems.length;
        return isNotValid
            ? {
                  filesCount: {
                      valid: false
                  }
              }
            : null;
    }
}
