import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

import { IControlConfig, IControlOptions, IDGFormGroup } from 'idg-mat';
import { FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'idg-docs-descriptive-form',
    templateUrl: './descriptive.component.html',
    styleUrls: ['./descriptive.component.scss'],
})
export class DescriptiveComponent implements OnInit {
    constructor() {}
    html = `
    <form [formGroup]="form" fxLayout="row wrap" fxLayoutAlign="space-between start" fxLayoutGap="7px">
        <idg-mat-input fxFlex formControlName="username">
            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
        </idg-mat-input>
        ...
        <!-- form array arrays -->
        ...
                <ng-container formArrayName="contacts">
                    <div fxLayout="column" *ngFor="let _ of addresses.controls; index as i" [formGroupName]="i">
                        <h3>Contacto:</h3>
                        <idg-mat-input formControlName="line1">
                            <mat-icon matPrefix>edit</mat-icon>
                            <button mat-button (click)="addCode(_)">AGREGAR</button>
                        </idg-mat-input>

                        <!-- nested form array arrays -->
                        <ng-container formArrayName="codes">
                            <div fxLayout="row" *ngFor="let code of _.controls.codes.controls" [formGroup]="code">
                                <idg-mat-input formControlName="code">
                                    <mat-icon matPrefix>code</mat-icon>
                                </idg-mat-input>
                            </div>
                        </ng-container>
        ...
    </form>
  `;
    ts = `
  codesFormConfig: { [key: string]: IControlConfig } = {
        code: {
            placeholder: 'Input address code',
            hint: 'Address code',
            elementType: 'input'
        }
    };

    contactsFormConfig: { [key: string]: IControlConfig } = {
        line1: {
            placeholder: 'Address line 1',
            hint: 'Address line 1',
            elementType: 'input'
        },
        codes: {
            elementType: 'array',
            children: this.codesFormConfig
        }
    };

    form = new IDGFormGroup({
        username: {
            placeholder: 'Type your username',
            hint: 'Input component sample',
            elementType: 'input'
        },
        ....
        contacts: {
            elementType: 'childArray',
            children: this.contactsFormConfig
        },
        address: {
            elementType: 'child',
            childDef: this.addressFormConfig
        }
    });
    ...
    addresses = this.form.get('contacts') as FormArray;
    `;

    countries = [
        { text: 'México', value: 'MEX' },
        { text: 'USA', value: 'USA' },
        { text: 'Cánada', value: 'CAN' },
    ];
    countries$ = new BehaviorSubject<IControlOptions[]>(this.countries);

    codesFormConfig: { [key: string]: IControlConfig } = {
        code: {
            placeholder: 'Input address code',
            hint: 'Address code',
            elementType: 'input',
        },
    };

    contactsFormConfig: { [key: string]: IControlConfig } = {
        line1: {
            placeholder: 'Address line 1',
            hint: 'Address line 1',
            elementType: 'input',
        },
        codes: {
            elementType: 'childArray',
            childDef: this.codesFormConfig,
        },
    };

    addressFormConfig: { [key: string]: IControlConfig } = {
        line1: {
            placeholder: 'Address line 1',
            hint: 'Address line 1',
            elementType: 'input',
        },
        line2: {
            placeholder: 'Address line 2',
            hint: 'Address line 2',
            elementType: 'input',
        },
        zipcode: {
            placeholder: 'Zip code',
            hint: 'Zipcode format',
            elementType: 'input',
        },
    };

    form = new IDGFormGroup({
        username: {
            placeholder: 'Type your username',
            hint: 'Input component sample',
            validators: [Validators.required],
            elementType: 'input',
        },
        email: {
            placeholder: 'Type your email address',
            displayFn: () => 'Eg. manolo@itia.mx',
            validators: [Validators.required],
            hint: 'Email component sample',
            elementType: 'email-input',
        },
        website: {
            placeholder: 'Type your work or personal website',
            validators: [Validators.required],
            hint: 'Url component sample',
            elementType: 'url-input',
        },
        gender: {
            placeholder: 'Select your gender',
            validators: [Validators.required],
            hint: 'Select component sample',
            elementType: 'select',
            options: [
                { text: 'Male', value: 1 },
                { text: 'Female', value: 2 },
            ],
        },
        country: {
            hint: 'Autocomplete component sample',
            placeholder: 'Select your country',
            displayFn: () => 'Eg. type Mex',
            validators: [Validators.required],
            elementType: 'autocomplete',
            asyncOptions: this.countries$.asObservable(),
            queryChange: (q: string) =>
                this.countries$.next(this.countries.filter((c) => c.text.toLowerCase().match(q.toLowerCase()))),
        },
        countries: {
            hint: 'Autocompletes component sample',
            placeholder: 'Select many countries',
            displayFn: () => 'Eg. type USA, ',
            validators: [Validators.required],
            elementType: 'autocompletes',
            forceSelection: true,
            value: [],
            asyncOptions: this.countries$.asObservable(),
            queryChange: (q: string) =>
                this.countries$.next(this.countries.filter((c) => c.text.toLowerCase().match(q.toLowerCase()))),
        },
        about: {
            placeholder: 'Tell us about you',
            validators: [Validators.required],
            hint: 'Textarea component sample',
            elementType: 'textarea',
        },
        birthday: {
            placeholder: 'Type your happy birthday',
            hint: 'Datepicker component sample',
            validators: [Validators.required, Validators.maxLength(2)],
            elementType: 'date-input',
        },
        files: {
            hint: 'File upload component sample',
            elementType: 'file-input',
            fileType: 'documents',
            filesCount: 2,
        },
        contacts: {
            value: [
                {
                    line1: 'Sample line',
                    codes: [{ code: 'My code' }],
                },
            ],
            elementType: 'childArray',
            childDef: this.contactsFormConfig,
        },
        address: {
            elementType: 'child',
            childDef: this.addressFormConfig,
        },
    });
    hide = false;

    contacts = this.form.get('contacts') as FormArray;

    ngOnInit(): void {
        this.form.valueChanges.subscribe((r) => console.log(r));
    }

    log(): void {
        console.log(this.form.value);
    }

    addContact(): void {
        this.contacts.push(new IDGFormGroup(this.contactsFormConfig));
    }

    addCode(address: IDGFormGroup): void {
        (address.controls.codes as FormArray).push(new IDGFormGroup(this.codesFormConfig));
    }
}
