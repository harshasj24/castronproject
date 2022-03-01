import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authServices: AuthService, private router: Router) {}
  dat: any;

  passText: any = 'password';
  eyes: any = 'fa fa-eye-slash';
  formsServersData: any;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    check: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9]+$'),
    ]),
  });
  get email() {
    return this.loginForm.get('mail');
  }
  get password() {
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

  msg: any;
  errMsg: any = '';

  send() {
    console.log(this.loginForm.value);

    this.authServices.login(this.loginForm.value).subscribe((val) => {
      this.msg = val;
      this.errMsg = val;

      console.log(this.msg);

      if (this.msg.data.role === 'Admin') {
        this.router.navigate(['/dashbord']);
      } else {
        this.router.navigate(['/yoursample']);
      }
    });
  }

  ngOnInit(): void {}
}
