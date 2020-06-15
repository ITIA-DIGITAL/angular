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
            switch (cc.elementType) {
                case 'array':
                    if (!!cc.value && !isArrayLike(cc.value)) {
                        throw new Error('IDG: Invalid value for array type');
                    }
                    if (!cc.children) {
                        throw new Error('IDG: No children conf. provided');
                    }
                    const formGroups = ((cc.value || []) as Array<any>).map(value => {
                        const c = { ...cc.children };
                        for (const childKey of Object.keys(cc.children)) {
                            c[childKey].value = value[childKey];
                        }
                        return new IDGFormGroup(c);
                    });
                    controls[key] = new FormArray(formGroups);
                    break;
                default:
                    controls[key] = new IDGFormControl(cc);
            }
        }

        super(controls, validatorOrOpts, asyncValidator);
        this.controlsConfig = { ...controlsConfig };
    }
}
