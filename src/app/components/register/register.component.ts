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
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
    "phone":"",
    "role":"customer"
  };

  // "first_name": "mahmoud",
  // "last_name": "skafi",
  // "email":"madd@mad.com",
  // "password":"05995484",
  // "phone": "05995484",
  // "role":"customer"
  ngOnInit(): void {
  }

  register(userData){
    console.log(userData);
    this.authService.CustomerRegisterUser(userData).subscribe({
        next:res=>{
          console.log(res);
          this.router.navigate(['/login']);
        },
        error:err=>{
          this.invalidRegister=true;
        }

    })
  }
}
