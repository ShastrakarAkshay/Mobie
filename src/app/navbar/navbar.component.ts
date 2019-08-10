import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required)
    });
  
    this.signupForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
   }

  ngOnInit() {
  }

}
