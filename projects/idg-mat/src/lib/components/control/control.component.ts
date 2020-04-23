import { ViewEncapsulation, forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractControlComponent } from '../../concerns/abstract.control.component';

const IDG_MAT_FORM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ControlComponent),
    multi: true
};

@Component({
    selector: 'idg-mat-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
    providers: [IDG_MAT_FORM_VALUE_ACCESSOR],
    encapsulation: ViewEncapsulation.None
})
export class ControlComponent extends AbstractControlComponent<string | string[] | boolean | File[]> {
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
