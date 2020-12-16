import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/guard/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  router: string;
  constructor(public _router:Router,public auth:AuthService) {
    this.router = _router.url;
  }

  ngOnInit() {
  }
  logout(){
    this.auth.logout();
  }
}
