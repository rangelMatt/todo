// package com.in28minutes.springboot.web;

// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
// import { AppComponent } from '../app.component';

// @ComponentScan(
//   value = "com.in28minutes.springboot.web"
// )
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// public class SpringBootFirstWebApplication implements SomeInterface
export class WelcomeComponent implements OnInit {

  message = 'Welcome again!'
  welcomeMessageFromService:string | undefined

  name = ''

  // public SpringBootFirstWebApplication(){

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
      error => this.handleErrorResponse(error)
    );
    console.log('last line of getWelcomeMessage')
    // console.log("get welcome message");
  }

  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService = response.message
    // console.log(response);
    // console.log(response.message);
  }
  handleErrorResponse(error) {
    this.welcomeMessageFromService =
  }
}




export class Class1 {

}

export class Class2 {

}
