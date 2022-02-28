import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private apiServices: ApiService,
    private router: Router
  ) {
    const token = localStorage.getItem('token');
    this.islogedin.next(!!token);
  }
  data = [{ emai: 'harsha@com', pass: 123 }];
  formsData: any = [];
  private islogedin = new BehaviorSubject<boolean>(false);
  islogin = this.islogedin.asObservable();

  role: any;

  login(data: any) {
    return this.apiServices.login(data).pipe(
      tap((responce: any) => {
        this.islogedin.next(true);
        localStorage.setItem('token', responce.data.token);
        if (responce.data.role === 'Admin') {
          this.role = true;
        }
      })
    );    
  }

  getData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  
  newData() {
    return this.formsData;
  }
}
