import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  // executeHelloWorldServiceWithPathVariable(name: string) {
  //   // throw new Error('Method not implemented.');
  // }

  constructor(
    private http: HttpClient,
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    // console.log("Execute Hello World Bean Service");
  }
  //http://localhost:8080/hello-world/path-variable/centralcoastbarbell
  executeHelloWorldServiceWithPathVariable(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
    {headers});
  }
  createBasicAuthenticationHttpHeader() {
    let username = 'centralcoastbarbell'
    let password = 'admin'
    let basicAuthHeaderString = ('Basic ' + window.btoa(`${username}:${password}`));
    return basicAuthHeaderString;
  }


}

// Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/admin' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
