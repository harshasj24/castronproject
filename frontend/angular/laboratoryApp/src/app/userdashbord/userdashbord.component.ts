import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userdashbord',
  templateUrl: './userdashbord.component.html',
  styleUrls: ['./userdashbord.component.css'],
})
export class UserdashbordComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiServices: ApiService) {}

  allReports: any;
  viewReportglu(_id: any) {}
  viewReportthy(_id: any) {}
  viewReport(_id: any) {}

  ngOnInit(): void {
    let _id = this.route.snapshot.params._id;
    console.log('hello lkb', _id);

    this.apiServices.userReports(_id).subscribe((val) => {
      console.log(val);

      this.allReports = val;
      this.allReports = [this.allReports.data];
    });
  }
}
