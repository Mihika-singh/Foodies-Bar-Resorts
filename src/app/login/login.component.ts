import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    email: "mihika@gmail.com",
    password: "mihika123",
  };
  wrongCredential = false;
  
  constructor(private router: Router, private auth: LoginService) { }

  ngOnInit(): void {


  }
  signIn(formval: any) {
    if (this.model.email === "mihika@gmail.com" && this.model.password === "mihika123") {
      this.router.navigate([''])
    }
    else {
      this.wrongCredential = true;
    }
    console.log(formval)
  }
}
