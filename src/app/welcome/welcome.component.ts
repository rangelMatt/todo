// package com.in28minutes.springboot.web;

// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  name = ''

  // public SpringBootFirstWebApplication(){

  //ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

}

  export class Class1 {

  }

  export class Class2 {

  }
