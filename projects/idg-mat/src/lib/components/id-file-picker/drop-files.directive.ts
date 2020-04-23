import { EventEmitter, HostListener, Directive, Output, Input } from '@angular/core';
import { fileType, FileTypes } from '../models/file-type';

@Directive({
    selector: '[IDigitalDropFiles]'
})
export class DropFilesDirective {
    @Input() files: File[] = [];
    @Input() fileType: FileTypes = 'default';
    @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

    types = fileType;

    constructor() {}

    @HostListener('dragover', ['$event'])
    public onDragEnter(event: any) {
        this.mouseOver.emit(true);
        this.preventDefaultOpen(event);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(event: any) {
        this.mouseOver.emit(false);
    }

    @HostListener('drop', ['$event'])
    public onDrop(event: any) {
        this.mouseOver.emit(false);
        const transfer = this.transferBrowserPollyfill(event);
        if (!transfer) {
            return;
        }
        this.attachFiles(transfer.files);
        this.preventDefaultOpen(event);
        this.mouseOver.emit(false);
    }

    public attachFiles(fileList: FileList) {
        for (const prop of Object.getOwnPropertyNames(fileList)) {
            const fileTmp = fileList[prop];
            if (this.fileIsValid(fileTmp)) {
                this.files.push(fileTmp);
            }
        }
    }

    // Validators begin
    public fileIsValid(file: File): boolean {
        return !this.filePresent(file.name) && this.fileTypeIsValid(file.type);
    }

    public filePresent(fileName: string): boolean {
        for (const file of this.files) {
            if (file.name === fileName) {
                console.log(`${fileName} already present`);
                return true;
            }
        }
        return false;
    }

    public fileTypeIsValid(type: string): boolean {
        return !!type && this.types[this.fileType] && this.types[this.fileType].type.indexOf(type) >= 0;
    }
    // Validators end

    public preventDefaultOpen(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Extends compatibility across some old browsers
    public transferBrowserPollyfill(event: any) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }
}
