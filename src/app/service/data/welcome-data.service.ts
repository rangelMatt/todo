import { HttpClient } from '@angular/common/http';
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
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
    )

  }
}
