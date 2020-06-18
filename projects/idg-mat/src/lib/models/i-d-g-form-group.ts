import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn, FormGroup, FormArray } from '@angular/forms';
import { isArrayLike } from 'rxjs/internal-compatibility';

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
            const setup = controlsConfig[key];
            switch (setup.elementType) {
                case 'childArray':
                    if (!!setup.value && !isArrayLike(setup.value)) {
                        throw new Error('IDG: Invalid value for array type');
                    }
                    if (!setup.childDef) {
                        throw new Error('IDG: No childDef conf. provided');
                    }
                    const formGroups = ((setup.value || []) as Array<any>).map(value => {
                        const itemConfig = { ...setup.childDef };
                        if (!!setup.value) {
                            for (const childKey of Object.keys(itemConfig)) {
                                itemConfig[childKey].value = value[childKey];
                            }
                        }
                        return new IDGFormGroup(itemConfig);
                    });
                    controls[key] = new FormArray(formGroups);
                    break;
                case 'child':
                    if (!setup.childDef) {
                        throw new Error('IDG: No childDef conf. provided');
                    }
                    const childSetup = { ...setup.childDef };
                    if (!!setup.value) {
                        for (const childKey of Object.keys(childSetup)) {
                            childSetup[childKey].value = setup.value[childKey];
                        }
                    }
                    controls[key] = new IDGFormGroup(childSetup);
                    break;
                default:
                    controls[key] = new IDGFormControl(setup);
            }
        }
        super(controls, validatorOrOpts, asyncValidator);
        this.controlsConfig = { ...controlsConfig };
    }
}
