import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IDigitalFormGroup } from '../models/i-digital-form-group';

@Component({
    selector: 'IDigital-form',
    templateUrl: './idigital-form.component.html',
    styleUrls: ['./idigital-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class IDigitalFormComponent implements OnInit {
    @Input() form: IDigitalFormGroup;

    get controlNames(): string[] {
        return Object.getOwnPropertyNames(this.form.controlsConfig || {});
    }

    constructor() {
        // TODO: form
    }

    ngOnInit(): void {}
}
