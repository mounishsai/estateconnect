import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const jwttoken = localStorage.getItem('jwtToken');
    const username = localStorage.getItem('username');

    if(jwttoken && username){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwttoken}`
        }
      })
    }

    return next.handle(request);
  }
}
