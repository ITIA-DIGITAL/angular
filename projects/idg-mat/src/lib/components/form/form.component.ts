import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IDGFormGroup } from '../../models/i-d-g-form-group';

@Component({
    selector: 'idg-mat-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
    @Input() form: IDGFormGroup;

    get controlNames(): string[] {
        return Object.getOwnPropertyNames(this.form.controlsConfig || {});
    }

    constructor() {}

    ngOnInit(): void {}
}
