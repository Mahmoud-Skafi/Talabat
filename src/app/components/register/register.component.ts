import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  userData = {
    "email":"",
    "password":""
  };
  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.userData)
  }

}
