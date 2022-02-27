import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  constructor(private apiServices: ApiService) {}

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
  ngOnInit(): void {
    this.apiServices.userDetails().subscribe((val) => {
      console.log(val);

      this.userDetails = val;
    });
    let date = new Date();

    let time = `${date.getHours() - 12} ${date.getMinutes()} `;
    console.log(time);
  }
}
