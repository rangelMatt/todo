import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('authenticateUser', username);

      return true;
    }
    return false;
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = ('Basic ' + window.btoa(`${username}:${password}`));

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers }).pipe(
        map(
          (data: any) => {
            sessionStorage.setItem('authenticateUser', username);
            return data;
          }
        )
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}

export class AuthenticationBean {
  constructor(public message: any) {

  }
}
