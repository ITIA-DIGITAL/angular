import { AbstractControlComponent } from './abstract.control.component';
import { Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IControlOptions } from '../models';

export abstract class SelectControlComponent<T> extends AbstractControlComponent<T> implements OnInit, OnDestroy {
    private opts: IControlOptions[];
    get options(): IControlOptions[] {
        return this.opts;
    }
    @Input()
    set options(value) {
        this.opts = [...value];

        if (Array.isArray(this.value)) {
            const selection: any[] = this.value;
            for (const option of this.options) {
                option.checked = !!selection.find(v => v === option.value);
            }
        }
    }

    protected optionsSubscription: Subscription;

    ngOnInit(): void {
        super.ngOnInit();

        if (!this.config.asyncOptions && !this.config.options) {
            throw new Error(
                `IDG: No options provided for ${this.config.name || this.config.hint}, neither local or async..`
            );
        }

        if (!this.options) {
            if (this.config.options) {
                this.options = this.config.options;
            }
        }

        if (!!this.config.asyncOptions) {
            this.optionsSubscription = this.config.asyncOptions.subscribe(r => (this.options = r));
        }
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        if (!!this.optionsSubscription) {
            this.optionsSubscription.unsubscribe();
        }
    }
}
