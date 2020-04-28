import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IDGFormGroup } from '../../models';

@Component({
    selector: 'idg-mat-form',
    templateUrl: './i-d-g-form.component.html',
    styleUrls: ['./i-d-g-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class IDGFormComponent implements OnInit {
    @Input() form: IDGFormGroup;

    get controlNames(): string[] {
        return Object.getOwnPropertyNames(this.form.controlsConfig || {});
    }

    constructor() {}

    ngOnInit(): void {}
}
