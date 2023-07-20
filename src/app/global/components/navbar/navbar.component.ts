import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToDesign() {
    this.router.navigate(['works/design']);
  }
  routeToHome() {
    this.router.navigate(['works/home']);
  }
  routeToDev() {
    this.router.navigate(['works/development']);
  }
  routeToMarketing() {
    this.router.navigate(['works/marketing']);
  }

}
