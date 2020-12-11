
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  invalidLogin:boolean;
  // userData={
  //   user_name:'',
  //   password:''
  // }

  constructor(
    private authService:AuthService,
    public router:Router
    ) { }
    userData={
      "user_name":"",
      "password": ""
    }


    signIn(userData){
      console.log(userData);
      this.authService.login(userData).subscribe(
        {
          next:data=>{
            console.log(data);
            this.router.navigate(['/dashboard']);
          },
          error:err=>{
            this.invalidLogin=true;
          }
        }
      )
    }
}
