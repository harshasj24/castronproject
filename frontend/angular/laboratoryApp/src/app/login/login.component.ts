import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authServices: AuthService,
    private router: Router,
    private toster: ToastrService
  ) {}
  dat: any;

  passText: any = 'password';
  eyes: any = 'fa fa-eye-slash';
  formsServersData: any;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    check: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      
    ]),
  });
  get email() {
    return this.loginForm.get('mail');
  }
  get password() {
    return this.loginForm.get('password');
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

  tost() {
    this.toster.error('noooooo');
  }

  send() {
    console.log(this.loginForm.value);

    this.authServices.login(this.loginForm.value).subscribe((val:any) => {
      this.msg = val;
    
      if (this.msg.data.role === 'Admin') {
        this.toster.success(this.msg.data.fName.toUpperCase(), 'Welcome Back');
        this.router.navigate(['/dashbord']);
      } else {
        this.router.navigate(['/yoursample', this.msg.data.email]);
        this.toster.success(this.msg.data.fName.toUpperCase(), 'Welcome Back');
      }
    },(err:any)=>{
      this.errMsg=err.error
      console.log(err.error);
      
    });
  }

  ngOnInit(): void {}
}
