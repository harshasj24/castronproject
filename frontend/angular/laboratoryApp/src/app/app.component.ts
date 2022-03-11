import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public serv: AuthService, private router: Router) {}
  flag: any;

  logout() {
  

    localStorage.clear();
  }

  ngOnInit(): void {
    this.flag = this.serv.formsData;
    console.log('helo', this.flag);
  }

  title = 'laboratoryApp';
}
