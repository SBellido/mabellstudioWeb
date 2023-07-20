/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { GlobalModule }  from '../global/global.module';
import { WorksRoutingModule } from './works-routing.module';
import { MatIconModule } from '@angular/material/icon';

/* Components */
import { WorksComponent } from './works.component';
import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    WorksComponent,
    DesignComponent,
    DevelopmentComponent,
    MarketingComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    WorksRoutingModule,
    MatIconModule
  ]
})

export class WorksModule { }
