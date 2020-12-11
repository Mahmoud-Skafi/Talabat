import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl="http://localhost:1200/admin/register";
  private loginUrl="http://localhost:1200/admin/login";
  constructor(private http:HttpClient) { }

  registerUser(user){
    return this.http.post<any>(this.registerUrl,user);
  }
  login(user){
    return this.http.post(this.loginUrl,user);
  }
  logout(user){

  }
  isLoggedIn(){
    return !!localStorage .getItem('token');
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
