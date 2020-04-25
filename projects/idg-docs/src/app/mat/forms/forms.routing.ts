import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { DescriptiveComponent } from './descriptive/descriptive.component';

const routes: Routes = [
    {
        path: '',
        component: FormsComponent,
        children: [
            {
                path: 'descriptive',
                component: DescriptiveComponent
            }
        ]
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
export class FormsRouting {}
