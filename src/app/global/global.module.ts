/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ]
})
export class GlobalModule { }
