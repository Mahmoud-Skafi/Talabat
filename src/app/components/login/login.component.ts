
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
  constructor(
    private authService:AuthService,
    public router:Router
    ) { }
    userData={
      "user_name":"",
      "password": ""
    }

    token;
    signIn(userData){
      console.log(userData);
      this.authService.login(userData).subscribe(
        {
          next:res=>{
            console.log(res);
            this.token = res['token'];
            localStorage.setItem('token',this.token)
            this.router.navigate(['/dashboard']);
          },
          error:err=>{
            this.invalidLogin=true;
          }
        }
      )
    }
}
