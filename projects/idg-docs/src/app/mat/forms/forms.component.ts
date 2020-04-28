import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'idg-docs-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    navLinks = [
        {
            path: ['descriptive'],
            label: 'HTML form definition'
        },
        {
            path: ['wrapper'],
            label: '<idg-form /> definition'
        }
    ];

    constructor() {}

    ngOnInit(): void {}
}
