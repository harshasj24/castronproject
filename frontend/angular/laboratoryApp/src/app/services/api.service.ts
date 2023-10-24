import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../shared/models/Test';
import { Patient } from '../shared/models/Patient';

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

  viewOneReport(email: any) {
    return this.http.get(`http://localhost:4300/reports/viewreport/${email}`);
  }

  editReport(data: any) {
    return this.http.put('http://localhost:4300/reports/updaterep', data);
  }

  userReports(email: any) {
    return this.http.get(`http://localhost:4300/reports/userSamples/${email}`);
  }

  createTest(data: Test): Observable<Test> {
    return this.http.post<Test>('http://localhost:4300/report/test/new', data);
  }
  addPatient(data: Patient): Observable<Patient> {
    return this.http.post<Patient>('http://localhost:4300/patient/add', data);
  }
}
