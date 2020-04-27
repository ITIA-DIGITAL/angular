import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';
import { IDGMatModule } from '@itia-digital/material';

@NgModule({
    declarations: [TopNavComponent],
    exports: [TopNavComponent],
    imports: [CommonModule, RouterModule, IDGMatModule]
})
export class LayoutModule {}
