/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  declarations: [ 
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class GlobalModule { }
