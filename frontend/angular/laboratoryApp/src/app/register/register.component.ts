import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private apiservices: ApiService,
    private router: Router,
    private toster: ToastrService
  ) {}
  regForm = new FormGroup({
    fName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  get fName(){
    return this.regForm.get("fName")

  }
  get email(){
    return this.regForm.get("email")

  }
  get password(){
    return this.regForm.get("password")

  }
  get role(){
    return this.regForm.get("role")

  }
  passText: any = 'password';
  eyes: any = 'fa fa-eye-slash';
  togglePass() {
    if (this.passText === 'password') {
      this.passText = 'text';
      this.eyes = 'fa fa-eye';
    } else {
      this.passText = 'password';
      this.eyes = 'fa fa-eye-slash';
    }
  }

  sataus: any;
  regSubmit() {
    this.apiservices.signup(this.regForm.value).subscribe((val) => {
      this.sataus = val;

      if (!this.sataus.error) {
        this.toster.success('register sucessfull');
        // window.confirm('register addesucess fully');
        this.router.navigate(['/userdetails']);
      } else {
        window.alert(this.sataus.message);
      }
    });
    console.log(this.sataus);
  }

  ngOnInit(): void {}
}
