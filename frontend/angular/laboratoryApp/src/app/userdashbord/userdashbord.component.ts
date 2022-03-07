import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userdashbord',
  templateUrl: './userdashbord.component.html',
  styleUrls: ['./userdashbord.component.css'],
})
export class UserdashbordComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiServices: ApiService, private router:Router) {}

  allReports: any;

  hemoForm = new FormGroup({
    hemoglobin: new FormControl('', Validators.required),
    neutrophils: new FormControl('', Validators.required),
    eosinophiles: new FormControl('', Validators.required),
    basophills: new FormControl('', Validators.required),
    pavkedCellVolume: new FormControl('', Validators.required),
    totalCount: new FormControl('', Validators.required),
    lymphocytes: new FormControl('', Validators.required),
    monocytes: new FormControl('', Validators.required),
    redBloodCells: new FormControl('', Validators.required),
    mvc: new FormControl('', Validators.required),
  });

  data: any;
  glucoForm = new FormGroup({
    fastingbloodsugar: new FormControl('', Validators.required),

    postprandilabloodsugar: new FormControl('', Validators.required),
    hba1c: new FormControl('', Validators.required),
    calcium: new FormControl('', Validators.required),
  });
  thyForm = new FormGroup({
    t3Total: new FormControl('', Validators.required),

    thyroxine: new FormControl('', Validators.required),
    tsh: new FormControl('', Validators.required),
  });

  newa: any;
  uId: any;

  glucoData() {
    this.apiServices
      .editReport({ _id: this.uId, glucometry: this.glucoForm.value })
      .subscribe((val) => {});
  }

  hemoData() {
    console.log(this.hemoForm.value);

    this.apiServices
      .editReport({ _id: this.uId, haematology: this.hemoForm.value })
      .subscribe((val) => {
        console.log(val);
      });
  }
  thyData() {
    this.apiServices
      .editReport({ _id: this.uId, thyroid: this.thyForm.value })
      .subscribe((val) => {
        console.log(val);
      });
  }
  sampleFormData() {}

  reportsData: any;

  // allReports: any;

  heomoglobinReport: any = [];
  glucometryReport: any = [];
  thyroidReport: any = [];

  hemo() {}

  userReport: any = '';

  viewReport(_id: any) {
    // this.uId = _id;
    // for (const i of this.allReports.data) {
    //   if (_id === i._id) {
    //     this.heomoglobinReport = i.haematology[0];
    //   }
    // }
  }
  arr: any;
  viewReportglu(_id: any) {
    // this.uId = _id;
    // // this.apiServices.viewOneReport(_id).subscribe((val) => {
    // //   this.userReport = val;
    // //   console.log(val);
    // //   this.userReport = val;
    // //   this.glucometryReport = this.userReport.data.glucometry[0];
    // for (const i of this.allReports.data) {
    //   if (_id === i._id) {
    //     this.glucometryReport = i.glucometry[0];
    //   }
    // }
  }
  viewReportthy(_id: any) {
    // this.uId = _id;
    // for (const i of this.allReports.data) {
    //   if (_id === i._id) {
    //     this.thyroidReport = i.thyroid[0];
    //   }
    // }
  }

  ngOnInit(): void {
    let _id = this.route.snapshot.params._id;
    console.log('hello lkb', _id);

    this.apiServices.userReports(_id).subscribe((val:any) => {
      console.log(val)
      if (val.error) {
        window.alert(val.message)
        this.router.navigate(["/login"])
        
      }else{

      this.allReports = val;
      this.allReports = [this.allReports.data];
      if (this.allReports[0].glucometry[0]) {
        this.glucometryReport = this.allReports[0].glucometry[0];
      }
      if (this.allReports[0].haematology[0]) {
        this.heomoglobinReport = this.allReports[0].haematology[0];
      }
      if (this.allReports[0].thyroid[0]) {
        this.thyroidReport = this.allReports[0].thyroid[0];
      }
    }
    });

  }
}
