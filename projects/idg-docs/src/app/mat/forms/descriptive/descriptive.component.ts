import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

import { IControlConfig, IControlOptions, IDGFormGroup } from 'idg-mat';
import { Validators } from '@angular/forms';

@Component({
    selector: 'idg-docs-descriptive-form',
    templateUrl: './descriptive.component.html',
    styleUrls: ['./descriptive.component.scss']
})
export class DescriptiveComponent implements OnInit {
    constructor() {}
    html = `
    <form [formGroup]="form" fxLayout="row wrap" fxLayoutAlign="space-between start" fxLayoutGap="7px">
        <idg-mat-input fxFlex formControlName="username">
            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
        </idg-mat-input>
        <idg-mat-input-email fxFlex formControlName="email"></idg-mat-input-email>
        <idg-mat-select formControlName="gender"></idg-mat-select>
        <idg-mat-autocomplete formControlName="country"></idg-mat-autocomplete>
    </form>
  `;
    ts = `
  form = new IDGFormGroup({
        username: {
            placeholder: 'Type your username',
            hint: 'Input component sample',
            elementType: 'input',
            visible: true
        },
        email: {
            placeholder: 'Type your email address',
            displayFn: () => 'Eg. manolo@itia.mx',
            validators: [Validators.required],
            hint: 'Email component sample',
            elementType: 'email',
            visible: true
        },
        website: {
            placeholder: 'Type your work or personal website',
            validators: [Validators.required],
            hint: 'Url component sample',
            elementType: 'url',
            visible: true
        },
        gender: {
            placeholder: 'Select your gender',
            validators: [Validators.required],
            hint: 'Select component sample',
            elementType: 'select',
            visible: true,
            options: [
                { text: 'Male', value: 1 },
                { text: 'Female', value: 2 }
            ]
        },
        country: {
            hint: 'Autocomplete component sample',
            placeholder: 'Select your country',
            displayFn: () => 'Eg. type Mex',
            validators: [Validators.required],
            elementType: 'autocomplete',
            visible: true,
            asyncOptions: this.countries$.asObservable(),
            queryChange: (q: string) =>
                this.countries$.next(this.countries.filter(c => c.text.toLowerCase().match(q.toLowerCase())))
        },
        countries: {
            hint: 'Autocompletes component sample',
            placeholder: 'Select many countries',
            displayFn: () => 'Eg. type USA, ',
            validators: [Validators.required],
            elementType: 'autocompletes',
            forceSelection: true,
            visible: true,
            value: [],
            asyncOptions: this.countries$.asObservable(),
            queryChange: (q: string) =>
                this.countries$.next(this.countries.filter(c => c.text.toLowerCase().match(q.toLowerCase())))
        },
        about: {
            placeholder: 'Tell us about you',
            validators: [Validators.required],
            hint: 'Textarea component sample',
            elementType: 'textarea',
            visible: true
        },
        birthday: {
            placeholder: 'Type your happy birthday',
            hint: 'Datepicker component sample',
            elementType: 'date-input',
            visible: true
        },
        files: {
            hint: 'File upload component sample',
            elementType: 'file-input',
            fileType: 'documents',
            filesCount: 2,
            visible: true
        }
    });
    `;

    countries = [
        { text: 'México', value: 'MEX' },
        { text: 'USA', value: 'USA' },
        { text: 'Cánada', value: 'CAN' }
    ];
    countries$ = new BehaviorSubject<IControlOptions[]>(this.countries);

    form = new IDGFormGroup({
        username: {
            placeholder: 'Type your username',
            hint: 'Input component sample',
            elementType: 'input',
            visible: true
        },
        email: {
            placeholder: 'Type your email address',
            displayFn: () => 'Eg. manolo@itia.mx',
            validators: [Validators.required],
            hint: 'Email component sample',
            elementType: 'email',
            visible: true
        },
        website: {
            placeholder: 'Type your work or personal website',
            validators: [Validators.required],
            hint: 'Url component sample',
            elementType: 'url',
            visible: true
        },
        gender: {
            placeholder: 'Select your gender',
            validators: [Validators.required],
            hint: 'Select component sample',
            elementType: 'select',
            visible: true,
            options: [
                { text: 'Male', value: 1 },
                { text: 'Female', value: 2 }
            ]
        },
        country: {
            hint: 'Autocomplete component sample',
            placeholder: 'Select your country',
            displayFn: () => 'Eg. type Mex',
            validators: [Validators.required],
            elementType: 'autocomplete',
            visible: true,
            asyncOptions: this.countries$.asObservable(),
            queryChange: (q: string) =>
                this.countries$.next(this.countries.filter(c => c.text.toLowerCase().match(q.toLowerCase())))
        },
        countries: {
            hint: 'Autocompletes component sample',
            placeholder: 'Select many countries',
            displayFn: () => 'Eg. type USA, ',
            validators: [Validators.required],
            elementType: 'autocompletes',
            forceSelection: true,
            visible: true,
            value: [],
            asyncOptions: this.countries$.asObservable(),
            queryChange: (q: string) =>
                this.countries$.next(this.countries.filter(c => c.text.toLowerCase().match(q.toLowerCase())))
        },
        about: {
            placeholder: 'Tell us about you',
            validators: [Validators.required],
            hint: 'Textarea component sample',
            elementType: 'textarea',
            visible: true
        },
        birthday: {
            placeholder: 'Type your happy birthday',
            hint: 'Datepicker component sample',
            elementType: 'date-input',
            visible: true
        },
        files: {
            hint: 'File upload component sample',
            elementType: 'file-input',
            fileType: 'documents',
            filesCount: 2,
            visible: true
        }
    });
    hide = false;

    ngOnInit(): void {}
}
