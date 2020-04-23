import { EventEmitter } from '@angular/core';

export interface IFormControlComponent {
    placeholder: string;
    disabled: boolean;
    hint: string;
    value: any;

    change: (value: any) => void;
    onchange: EventEmitter<any>;
}
