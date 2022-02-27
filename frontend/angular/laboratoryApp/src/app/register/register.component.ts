import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
