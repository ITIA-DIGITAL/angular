import { EventEmitter, OnDestroy, OnInit, Optional, SkipSelf, Output, Input, Host } from '@angular/core';
import { ControlContainer, ControlValueAccessor } from '@angular/forms';

import { IControlComponent, IControlConfig, IDGFormControl } from '../models';

export abstract class AbstractControlComponent<T>
    implements IControlComponent, ControlValueAccessor, OnInit, OnDestroy {
    protected constructor(
        @Optional()
        @SkipSelf()
        @Host()
        public controlContainer: ControlContainer
    ) {}

    @Input() formControl: IDGFormControl;
    @Input() formControlName: string;
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
        // R e a c t i v e   f o r m
        if (!!this.controlContainer) {
            if (!this.formControl) {
                if (this.formControlName) {
                    this.formControl = this.controlContainer.control.get(this.formControlName) as IDGFormControl;
                } else {
                    throw new Error('IDG: Missing [FormControlName] directive from host element of the component');
                }
            }

            if (!this.formControl) {
                throw new Error(`IDG: ${this.formControlName} not found in form`);
            }

            if (!(this.formControl instanceof IDGFormControl)) {
                throw new Error('IDG: FormControl is not IDGFormControl');
            }

            if (!this.config) {
                this.config = this.formControl.config;
            }
        }

        if (!this.config) {
            throw new Error(
                `IDG: No config (IControlConfig) provided, check ${
                    this.formControlName || this.name
                } control is inside a [formGroup] container, [formControl] or [config] param is provided`
            );
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

        if (this.config) {
            this.config.value = obj;
        }
    }
}
