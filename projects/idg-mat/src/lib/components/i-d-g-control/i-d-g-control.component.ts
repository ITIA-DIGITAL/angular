import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ViewEncapsulation, forwardRef, Component, Optional, SkipSelf, Host } from '@angular/core';

import { AbstractControlComponent } from '../../concerns';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    useExisting: forwardRef(() => IDGControlComponent),
    provide: NG_VALUE_ACCESSOR,
    multi: true,
};

@Component({
    selector: 'idg-mat-control',
    templateUrl: './i-d-g-control.component.html',
    styleUrls: ['./i-d-g-control.component.scss'],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None,
})
export class IDGControlComponent extends AbstractControlComponent<string | string[] | boolean | File[]> {
    constructor(
        @Optional()
        @SkipSelf()
        @Host()
        public controlContainer: ControlContainer
    ) {
        super(controlContainer);
    }

    /**
     * ValueChanges proxy to handles each fileType of formControl
     */
    onControlChanges(obj: any): void {
        if (this.value !== obj) {
            this.value = obj;

            this.onChange(this.value);
            this.onTouch();
        }
    }
}
