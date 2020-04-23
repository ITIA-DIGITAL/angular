import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { IControlConfig } from './control-config.interface';

@Injectable()
export class IDigitalFormControl extends FormControl {
    readonly controlConfig: IControlConfig;

    constructor(config: IControlConfig) {
        super(config.value, config.validators, config.asyncValidator);
        this.controlConfig = config;
    }
}
