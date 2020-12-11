import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../guard/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth:AuthService) { }
  userData = {
    "email":"",
    "password":""
  };
  ngOnInit(): void {
  }
  // registerUser(){
  //   console.log(this.userData)
  //   return this._auth.registerUser(this.userData)
  //   .subscribe(
  //     res=> console.log(res),
  //     err=> console.log(err)
  //   )
  // }

}
