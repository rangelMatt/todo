// package com.in28minutes.springboot.web;

// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
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

  // public SpringBootFirstWebApplication(){
  constructor() { }

  ngOnInit(){
    console.log(this.message)
  }

}

  export class Class1 {

  }

  export class Class2 {

  }
