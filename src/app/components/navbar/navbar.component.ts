import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  router: string;
  constructor(public _router:Router) {
    this.router = _router.url;
  }

  ngOnInit(

  ) {
  }

}
