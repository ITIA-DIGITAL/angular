import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
    },
    {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
    },
    {
        path: '',
        redirectTo: '/material/forms'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatRouting {}
