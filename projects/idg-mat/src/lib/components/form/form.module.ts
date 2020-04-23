import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { ControlModule } from '../control';

@NgModule({
    imports: [CommonModule, FlexModule, ReactiveFormsModule, ControlModule],
    declarations: [FormComponent],
    exports: [FormComponent]
})
export class FormModule {}
