import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

import { ControlType, IControlOptions } from './control-type-definition';
import { FileTypes } from './file-type';

export interface IControlConfig {
    // html properties
    elementType?: ControlType;
    placeholder?: string;
    visible: boolean;
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
    // reactive form attributes
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
    validators?: ValidatorFn[];
    // File input params
    filesCount?: number;
    fileType?: FileTypes;
    // Flex layout
    fxFlexXs?: string;
    fxFlex?: string;
}
