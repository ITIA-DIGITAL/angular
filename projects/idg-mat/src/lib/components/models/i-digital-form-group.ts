import { Injectable } from '@angular/core';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn, FormGroup } from '@angular/forms';

import { IDigitalFormControl } from './idigital-form-control';
import { IControlConfig } from './control-config.interface';

@Injectable()
export class IDigitalFormGroup extends FormGroup {
    readonly controlsConfig: { [key: string]: IControlConfig };

    constructor(
        controlsConfig: { [key: string]: IControlConfig },
        validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
    ) {
        const controls: { [key: string]: any } = {};
        for (const key of Object.keys(controlsConfig)) {
            controls[key] = new IDigitalFormControl(controlsConfig[key]);
        }

        super(controls, validatorOrOpts, asyncValidator);
        this.controlsConfig = controlsConfig;
    }
}
