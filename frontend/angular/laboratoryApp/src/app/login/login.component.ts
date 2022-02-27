import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  dat: any;

  passText: any = 'password';
  eyes: any = 'fa fa-eye-slash';
  formsServersData: any;
  loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    check: new FormControl(''),
    pass: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9]+$'),
    ]),
  });
  get mail() {
    return this.loginForm.get('mail');
  }
  get pass() {
    return this.loginForm.get('pass');
  }
  togglePass() {
    if (this.passText === 'password') {
      this.passText = 'text';
      this.eyes = 'fa fa-eye';
    } else {
      this.passText = 'password';
      this.eyes = 'fa fa-eye-slash';
    }
  }

  umail: any = 'harsha@com';
  upass: any = '123';

  send() {
    if (this.mail?.value === this.umail && this.pass?.value === this.upass) {
      this.formsServersData = true;
      // this.serve.getdata(true);
      console.log(true);
    } else {
      this.formsServersData = false;
      // this.serve.getdata(true);
      console.log(false);
    }
  }

  ngOnInit(): void {
    console.log('edhooo sede');
  }
}
