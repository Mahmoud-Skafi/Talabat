import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl="http://localhost:1200/admin/register";
  private loginUrl="http://localhost:1200/admin/login";
  constructor(private http:HttpClient,private router:Router) { }

  registerUser(user){
    return this.http.post(this.registerUrl,user);
  }
  login(user){
    return this.http.post(this.loginUrl,user);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  isLoggedIn(){
    return !!localStorage .getItem('token');
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
