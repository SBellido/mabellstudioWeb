/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components*/
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './works.component';
import { DesignComponent } from './components/design/design.component';

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
    children: [     
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'design',
        component: DesignComponent
      },
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class WorksRoutingModule { }
