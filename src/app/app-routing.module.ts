import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'works',
        loadChildren: () => import('./works/works.module')
          .then(m => m.WorksModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'works/home' 
      },
      {
        path: '**',
        component: ErrorsComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }