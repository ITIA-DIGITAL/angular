import {
    Component,
    EventEmitter,
    Host,
    Injectable,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    SkipSelf
} from '@angular/core';
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

    @Input() formControlName: string;
    @Input() config: IControlConfig;
    @Input() name: string;

    control: IDGFormControl;

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
            if (this.controlContainer) {
                if (this.formControlName) {
                    const c: any = this.controlContainer.control.get(this.formControlName);

                    if (!c) {
                        throw new Error(`IDG: ${this.formControlName} not found in form`);
                    }

                    if (!(c instanceof IDGFormControl)) {
                        throw new Error('IDG: FormControl is not IDGFormControl');
                    }

                    this.control = c as IDGFormControl;
                    this.config = this.control.config;
                } else {
                    throw new Error('IDG: Missing [FormControlName] directive from host element of the component');
                }
            } else {
                throw new Error(
                    `IDG: No config (IControlConfig) provided, check ${this.formControlName ||
                        this.name} control is inside a [formGroup] container or [config] param is provided`
                );
            }
        }

        if (!this.config) {
            throw new Error('IDG: No config (IControlConfig) provided');
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
