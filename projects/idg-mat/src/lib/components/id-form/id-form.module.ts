import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { IDigitalFormComponent } from './idigital-form.component';
import { IDFormControlModule } from '../id-form-control/id-form-control.module';

@NgModule({
    imports: [CommonModule, FlexModule, ReactiveFormsModule, IDFormControlModule],
    declarations: [IDigitalFormComponent],
    exports: [IDigitalFormComponent]
})
export class IDFormModule {}
