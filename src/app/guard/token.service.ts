
import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenService implements HttpInterceptor {
  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token=localStorage.getItem('token');
    // console.log(token);
    let tokenizedReq=req.clone({
      headers:new HttpHeaders({
        Authorization:`${token}`
      })
    })
    return next.handle(tokenizedReq);
  }
}
