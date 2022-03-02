import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent implements OnInit {
  constructor(
    private servers: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private apiServices: ApiService
  ) {
    // console.log(this.sample.value, 'of constructor');
  }

  sample = new FormGroup({
    patientName: new FormControl('', [Validators.required]),
    hemoglobin: new FormControl(''),
    glucometry: new FormControl(''),
    thyroid: new FormControl(''),
  });
  get patientName() {
    return this.sample.get('patientName');
  }

  get hemoglobin() {
    return this.sample.get('hemoglobin');
  }

  get glucometry() {
    return this.sample.get('glucometry');
  }

  get thyroid() {
    return this.sample.get('thyroid');
  }
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

  allReports: any;

  heomoglobinReport: any = [];
  glucometryReport: any = [];
  thyroidReport: any = [];

  hemo() {}

  userReport: any = '';

  viewReport(_id: any) {
    this.uId = _id;
    for (const i of this.arr.data) {
      if (_id === i._id) {
        this.heomoglobinReport = i.haematology[0];
      }
    }
  }
  arr: any;
  viewReportglu(_id: any) {
    this.uId = _id;
    // this.apiServices.viewOneReport(_id).subscribe((val) => {
    //   this.userReport = val;
    //   console.log(val);
    //   this.userReport = val;

    //   this.glucometryReport = this.userReport.data.glucometry[0];

    console.log('thy', this.glucometry);

    for (const i of this.arr.data) {
      if (_id === i._id) {
        this.glucometryReport = i.glucometry[0];
      }
    }
  }
  viewReportthy(_id: any) {
    this.uId = _id;
    for (const i of this.arr.data) {
      if (_id === i._id) {
        this.thyroidReport = i.thyroid[0];
      }
    }
  }

  ngOnInit(): void {
    console.log('one', this.newa);

    this.apiServices.allreports().subscribe((val) => {
      console.log(val);
      this.arr = val;
    });

    window.addEventListener('beforeunload', function (e) {
      var confirmationMessage = 'o/';
      console.log('cond');
      e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      return confirmationMessage; // Gecko, WebKit, Chrome <34
    });

    //

    this.apiServices.usersReport().subscribe((data) => {
      this.reportsData = data;
      this.reportsData = this.reportsData.data;
      console.log(this.reportsData._id);
    });

    this.apiServices.usersReport().subscribe((rep) => {
      this.allReports = rep;
      this.allReports = this.allReports.data;
      console.log(rep);
    });

    console.log('onlu once', this.sample.value);
  }
}
