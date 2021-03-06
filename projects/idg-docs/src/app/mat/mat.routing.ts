import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
    },
    {
        path: '**',
        redirectTo: '/material/forms/descriptive'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatRouting {}
