import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  constructor(private apiServices: ApiService, private route: ActivatedRoute) {}

  regForm = new FormGroup({
    fName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  userDetails: any;

  newDetails: any;

  updatedOne: any = [];
  edit(email: any) {
    this.apiServices.oneuser(email).subscribe((val) => {
      this.newDetails = val;
      console.log(val);
      this.updatedOne = this.newDetails.data;
    });
  }
  regSubmit() {
    console.log(this.regForm.value);

    this.apiServices.updateOneUser(this.regForm.value).subscribe((val) => {
      console.log(val);
    });
  }
  viewReport(_id: any) {}
  viewReportthy(_id: any) {}
  viewReportglu(_id: any) {}
  allReports: any;
  ngOnInit(): void {
    this.apiServices.userDetails().subscribe((val) => {
      console.log(val);

      this.userDetails = val;
    });
  }
}
