import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginValidator } from './login.validator';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form;
  info = faInfoCircle;
  detail$ = false;

  constructor(
    private auth: AuthService,
    private router: Router, fb: FormBuilder) { 
    this.form = fb.group({
      username: ['', [Validators.required, LoginValidator.usernameCheck]]
    })
  }

  get username(){
    return this.form.get('username');
  }

  login()
  {
    this.auth.set(true);
    this.router.navigate(['/']);
  }

  updateInfo()
  {
    this.detail$ = !this.detail$;
  }



}
