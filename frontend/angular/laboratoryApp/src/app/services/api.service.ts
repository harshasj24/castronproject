import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('http://localhost:4300/labs/login', data);
  }

  signup(data: any) {
    return this.http.post('http://localhost:4300/labs/signup', data);
  }

  userDetails() {
    return this.http.get('http://localhost:4300/labs/alldata');
  }

  oneuser(email: any) {
    return this.http.get(`http://localhost:4300/labs/oneUserdetails/${email}`);
  }

  updateOneUser(data: any) {
    return this.http.put('http://localhost:4300/labs/updateuser', data);
  }

  usersReport() {
    return this.http.get('http://localhost:4300/reports/viewreports');
  }

  allreports() {
    return this.http.get('http://localhost:4300/reports/viewreports');
  }

  addReports(data: any) {
    return this.http.post('http://localhost:4300/reports/addreports', data);
  }

  viewOneReport(_id: any) {
    return this.http.get(`http://localhost:4300/reports/viewreport/${_id}`);
  }
}
