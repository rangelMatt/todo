import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "admin"
  password = ""
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username)
    // if(this.username==="admin" && this.password==="admin"){
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    // console.log(this.username)
    // if(this.username==="admin" && this.password==="admin"){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false;
        },
        (error: any) => {
          console.log(error)
          this.invalidLogin = true;
        }
      )
  }

}
