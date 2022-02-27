import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  flag: any = false;

  ngOnInit(): void {
    this.flag = this.serv.formsData;
    console.log('helo', this.flag);
  }

  constructor(private serv: AuthService) {}
  title = 'laboratoryApp';
}
