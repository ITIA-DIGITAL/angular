import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';

import { IDGMatModule } from '@idg/mat';
import { FormsRouting } from './forms.routing';

@NgModule({
    declarations: [FormsComponent],
    imports: [CommonModule, IDGMatModule, FormsRouting]
})
export class FormsModule {}
