import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IDGMatModule, TerminalModule } from '@itia-digital/material';
import { ComponentsComponent } from './components.component';
import { ComponentsRouting } from './components.routing';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations: [ComponentsComponent, TableComponent],
    imports: [CommonModule, IDGMatModule, ComponentsRouting, TerminalModule]
})
export class ComponentsModule {}
