import { ControlContainer } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ElementRef, ViewChild, OnDestroy, OnInit, Optional, SkipSelf, Host } from '@angular/core';

import { fromEvent, isObservable, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { SelectControlComponent } from './select.control.component';
import { IControlOptions } from '../models';

export abstract class AutocompleteControlComponent<T> extends SelectControlComponent<T> implements OnInit, OnDestroy {
    protected constructor(
        @Optional()
        @SkipSelf()
        @Host()
        public controlContainer: ControlContainer
    ) {
        super(controlContainer);
    }

    @ViewChild('filter', { static: true })
    filter: ElementRef;

    displayFn: (option: IControlOptions) => string;
    separatorKeysCodes = [ENTER, COMMA];
    forceSelection: boolean;
    selectable = false;
    removable = true;
    addOnBlur = true;

    valueText = '';
    protected valueTextSubscription: Subscription;
    protected filterSubscription: Subscription;

    ngOnInit(): void {
        super.ngOnInit();

        if (!this.filter) {
            throw new Error('IDG: HTML filter element not implemented on component');
        }

        if (!this.displayFn) {
            this.displayFn = this.config.displayFn || this.defaultDisplayFn;
        }

        if (!this.forceSelection) {
            if (this.config.forceSelection) {
                this.forceSelection = this.config.forceSelection;
            }
        }

        // Load text value if observable passed
        if (isObservable(this.config.valueText)) {
            this.valueTextSubscription = (this.config.valueText as Observable<string>).subscribe((r) =>
                console.log((this.valueText = r))
            );
        } else {
            this.valueText = this.config.valueText || '';
        }

        // Setup input search
        this.filterSubscription = fromEvent(this.filter.nativeElement, 'keyup')
            .pipe(
                debounceTime(210),
                map((event: KeyboardEvent) => (event.target as any).value as string),
                distinctUntilChanged()
            )
            .subscribe((q: string) => this.queryChange(q));
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        if (!!this.valueTextSubscription) {
            this.valueTextSubscription.unsubscribe();
        }
    }

    defaultDisplayFn(option: IControlOptions) {
        return option.text;
    }

    queryChange(s): void {
        if (!!this.config.queryChange) {
            this.config.queryChange(s);
        }
    }

    onSelected(event: MatAutocompleteSelectedEvent | IControlOptions): void {
        const option = event instanceof MatAutocompleteSelectedEvent ? (event.option.value as IControlOptions) : event;

        this.valueText = option.text;
        this.value = option.value;
        this.change(this.value);
    }

    abstract onClear(): void;
}
