import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/guard/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    public router:Router
    ) { }

  invalidLogin:boolean;
  userData={
    "email":"",
    "password": ""
  }
  ngOnInit(): void {
  }
  token;
  signIn(userData){
    console.log(userData);
    this.authService.Customerlogin(userData).subscribe(
      {
        next:res=>{
          console.log(res);
          this.token = res['token'];
          localStorage.setItem('token',this.token)
          this.router.navigate(['/']);
        },
        error:err=>{
          this.invalidLogin=true;
        }
      }
    )
  }
}
