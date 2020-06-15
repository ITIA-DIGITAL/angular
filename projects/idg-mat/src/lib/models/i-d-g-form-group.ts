import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn, FormGroup, FormArray } from '@angular/forms';

import { IControlConfig } from './control.config.interface';
import { IDGFormControl } from './i-d-g-form-control';
import { isArrayLike } from 'rxjs/internal-compatibility';

export class IDGFormGroup extends FormGroup {
    readonly controlsConfig: { [key: string]: IControlConfig };

    constructor(
        controlsConfig: { [key: string]: IControlConfig },
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
    ) {
        const controls: { [key: string]: any } = {};
        for (const key of Object.keys(controlsConfig)) {
            const cc = controlsConfig[key];
            if (cc.elementType === 'array') {
                if (!!cc.value && !isArrayLike(cc.value)) {
                    throw new Error('IDG: Invalid value for array type');
                }
                controls[key] = new FormArray(
                    ((cc.value || []) as Array<any>).map(value => new IDGFormGroup({ ...cc.children, value }))
                );
            } else {
                controls[key] = new IDGFormControl(cc);
            }
        }

        super(controls, validatorOrOpts, asyncValidator);
        this.controlsConfig = { ...controlsConfig };
    }
}
