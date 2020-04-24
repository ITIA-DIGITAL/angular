import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'material',
        loadChildren: () => import('./mat/mat.module').then(m => m.MatModule)
    },
    {
        path: '**',
        redirectTo: '/material'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {}
