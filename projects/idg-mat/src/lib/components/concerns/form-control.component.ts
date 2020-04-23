import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { IFormControlComponent } from './form-control.component.interface';
import { IControlConfig } from '../models/control-config.interface';

export abstract class FormControlComponent<T>
    implements IFormControlComponent, ControlValueAccessor, OnInit, OnDestroy {
    @Input() config: IControlConfig;
    @Input() name: string;

    // UI, props
    placeholder: string;
    visible: boolean;
    hint: string;
    value: T;

    @Output() onchange = new EventEmitter<T>();

    // ControlValueAccessor, props
    onTouch;
    onChange;
    disabled: boolean;

    ngOnInit(): void {
        if (!this.config) {
            throw new Error('No config (IControlConfig) provided');
        }

        if (!this.name) {
            this.name = this.config.name;
        }

        this.placeholder = this.config.placeholder;
        this.visible = this.config.visible;
        this.value = this.config.value;
        this.hint = this.config.hint;
    }

    ngOnDestroy(): void {}

    change(value: T): void {
        if (this.onChange) {
            this.onChange(value);
            this.onTouch();
        } else {
            this.onchange.emit(value);
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    writeValue(obj: any): void {
        this.value = obj;
        this.config.value = obj;
    }
}
