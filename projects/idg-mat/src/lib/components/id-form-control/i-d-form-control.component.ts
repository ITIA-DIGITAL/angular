import { ViewEncapsulation, forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { FormControlComponent } from '../concerns/form-control.component';

const IDIGITAL_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IDFormControlComponent),
    multi: true
};

@Component({
    selector: 'IDigital-form-control',
    templateUrl: './i-d-form-control.component.html',
    styleUrls: ['./i-d-form-control.component.scss'],
    providers: [IDIGITAL_FORM_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None
})
export class IDFormControlComponent extends FormControlComponent<string | string[] | boolean | File[]> {
    /**
     * ValueChanges proxy to handles each fileType of control
     */
    onControlChanges(obj: any): void {
        if (this.value !== obj) {
            this.value = obj;

            this.onChange(this.value);
            this.onTouch();
        }
    }
}
