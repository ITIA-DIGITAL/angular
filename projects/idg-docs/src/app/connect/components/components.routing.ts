import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
            {
                path: 'table-sample',
                component: TableComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/connect/components/table-sample'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRouting {}
