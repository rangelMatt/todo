import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    // console.log('before ' + this.isUserLoggedIn());
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('authenticateUser', username);
      // console.log('after ' + this.isUserLoggedIn());

      return true;
    }
    return false;
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = ('Basic ' + window.btoa(`${username}:${password}`));
    return basicAuthHeaderString;

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers });
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'centralcoastbarbell'
    let password = 'admin'
    let basicAuthHeaderString = ('Basic ' + window.btoa(`${username}:${password}`));
    return basicAuthHeaderString;
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
  constructor(public message: string) {

  }
}
