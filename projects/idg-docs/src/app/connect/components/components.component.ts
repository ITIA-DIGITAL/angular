import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'idg-docs-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
    constructor() {}

    navLinks = [
        {
            path: ['table-sample'],
            label: 'List as table (mat-table)'
        }
    ];

    ngOnInit(): void {}
}
