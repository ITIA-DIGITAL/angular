import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { IDGFormComponent } from './i-d-g-form.component';
import { IDGControlModule } from '../i-d-g-control';

@NgModule({
    imports: [CommonModule, FlexModule, ReactiveFormsModule, IDGControlModule],
    declarations: [IDGFormComponent],
    exports: [IDGFormComponent]
})
export class IDGFormModule {}
