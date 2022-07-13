import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'centralcoastbarbell'
    let password = 'admin'
    let basicAuthHeaderString = ('Basic ' + window.btoa(`${username}:${password}`));

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}
