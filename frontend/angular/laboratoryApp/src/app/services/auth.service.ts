import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  data = [{ emai: 'harsha@com', pass: 123 }];
  formsData: any = [];

  getData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  newData() {
    return this.formsData;
  }
}
