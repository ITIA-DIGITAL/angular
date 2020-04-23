import { FormControl } from '@angular/forms';

import { IControlConfig } from './control.config.interface';

export class IDGFormControl extends FormControl {
    readonly controlConfig: IControlConfig;

    constructor(config: IControlConfig) {
        super(config.value, config.validators, config.asyncValidator);
        this.controlConfig = { ...config };
    }
}
