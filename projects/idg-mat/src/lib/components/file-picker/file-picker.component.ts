import {
    ViewEncapsulation,
    ElementRef,
    forwardRef,
    Component,
    Optional,
    SkipSelf,
    Host,
    ViewChild,
    OnInit
} from '@angular/core';
import { Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ControlContainer } from '@angular/forms';

import { DropFilesDirective } from './drop-files.directive';
import { AbstractControlComponent } from '../../concerns';
import { fileType, FileTypes } from '../../models';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilePickerComponent),
    multi: true
};

const IDG_MAT_NG_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => FilePickerComponent),
    multi: true
};

/**
 * Validation with special thanks to:
 * https://netbasal.com/adding-integrated-validation-to-customs-in-angular-dc55e49639ae
 */

@Component({
    selector: 'idg-mat-file-picker',
    templateUrl: './file-picker.component.html',
    styleUrls: ['./file-picker.component.scss'],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR, IDG_MAT_NG_VALIDATORS],
    encapsulation: ViewEncapsulation.None
})
export class FilePickerComponent extends AbstractControlComponent<File[]> implements Validator, OnInit {
    fileType: FileTypes;
    filesCount = 1;

    @ViewChild('fileUpload', { static: true }) $fileUpload: ElementRef<HTMLInputElement>;

    fileItems: File[] = [];
    fileTypeConfig = fileType;
    isOverDragAndDrop = false;
    iconFileType: string;

    constructor(
        @Optional()
        @SkipSelf()
        @Host()
        controlContainer: ControlContainer,
        public drop: DropFilesDirective
    ) {
        super(controlContainer);
    }

    ngOnInit() {
        super.ngOnInit();

        this.iconFileType = this.fileTypeConfig[this.fileType]
            ? this.fileTypeConfig[this.fileType].icon
            : this.fileTypeConfig.default.icon;

        this.filesCount = this.config.filesCount;
        this.fileType = this.config.fileType;
        this.drop.fileType = this.fileType; // <-- fix always is default

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
