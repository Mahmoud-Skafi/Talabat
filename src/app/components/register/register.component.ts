import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../guard/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
  invalidRegister:boolean;
  userData = {
    "user_name": "",
    "email": "",
    "password": "",
    "role":"admin"
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
  register(userData){
    this.authService.registerUser(userData).subscribe({
        next:res=>{
          // console.log(res);
          this.router.navigate(['/login']);
        },
        error:err=>{
          this.invalidRegister=true;
        }

    })
  }
}
