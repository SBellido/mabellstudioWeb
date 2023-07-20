import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  designActive:boolean = false;
  developmentActive:boolean = false;
  marketingActive:boolean = false;

  constructor(private router: Router) { 
  }
  ngOnInit() {
   
  }

  public setButtonsStyle(item: string) {
    
    if (item === 'design') {
      this.designActive = true;
      this.developmentActive = false; 
      this.marketingActive = false; 
      this.router.navigate(['works/design']);
    } else if (item === 'development') {
        this.developmentActive = true;
        this.designActive = false; 
        this.marketingActive = false; 
        this.router.navigate(['works/development']);
    } else if (item === 'marketing') {
        this.marketingActive = true; 
        this.designActive = false; 
        this.developmentActive = false; 
        this.router.navigate(['works/marketing']);
    } else {
        this.designActive = false; 
        this.developmentActive = false; 
        this.marketingActive = false; 
        this.router.navigate(['works/home']);
    }
    
  }

  // routeToDesign() {
  //   this.router.navigate(['works/design']);
  // }
  // routeToHome() {
  //   this.router.navigate(['works/home']);
  // }
  // routeToDev() {
  //   this.router.navigate(['works/development']);
  // }
  // routeToMarketing() {
  //   this.router.navigate(['works/marketing']);
  // }

}
