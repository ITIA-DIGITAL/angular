import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

import { IControlOptions } from './control.options.interface';
import { ControlType } from './control.type';
import { FileTypes } from './file.type';

export interface IControlConfig {
    // Nested form definition (for array and children types)
    childDef?: { [key: string]: IControlConfig };
    // html properties
    elementType?: ControlType;
    placeholder?: string;
    visible?: boolean;
    hint?: string;
    name?: string;
    value?: any;
    // Elements: select & autocomplete
    asyncOptions?: Observable<IControlOptions[]>;
    options?: IControlOptions[];
    // Elements: autocomplete
    displayFn?: (option: IControlOptions) => string;
    valueText?: Observable<string> | string;
    queryChange?: (q: string) => void;
    forceSelection?: boolean;
    findOrCreate?: boolean;
    // reactive form attributes
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
    validators?: ValidatorFn[];
    // File input params
    fileDetailsHidden?: boolean;
    fileType?: FileTypes;
    filesCount?: number;
    // Flex layout
    fxFlexXs?: string;
    fxFlex?: string;
}
