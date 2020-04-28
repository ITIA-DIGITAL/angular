import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'material',
        loadChildren: () => import('./mat/mat.module').then(m => m.MatModule)
    },
    {
        path: 'connect',
        loadChildren: () => import('./connect/connect.module').then(m => m.ConnectModule)
    },
    {
        path: '**',
        redirectTo: '/material/forms/descriptive'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {}
