import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn, FormGroup } from '@angular/forms';

import { IControlConfig } from './control.config.interface';
import { IDGFormControl } from './i-d-g-form-control';

export class IDGFormGroup extends FormGroup {
    readonly controlsConfig: { [key: string]: IControlConfig };

    constructor(
        controlsConfig: { [key: string]: IControlConfig },
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
    ) {
        const controls: { [key: string]: any } = {};
        for (const key of Object.keys(controlsConfig)) {
            controls[key] = new IDGFormControl(controlsConfig[key]);
        }

        super(controls, validatorOrOpts, asyncValidator);
        this.controlsConfig = { ...controlsConfig };
    }
}
