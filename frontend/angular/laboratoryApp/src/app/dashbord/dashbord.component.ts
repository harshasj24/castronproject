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

  data: any;

  sampleFormData() {
    let data: any = this.sample.value.patientName;
    this.router.navigate(['/dashbord']);
    let ind = this.data.findIndex((val: any) => {
      console.log(val.name);

      return val.name === data;
    });
    console.log(this.patientName?.value);
    console.log(ind);
    let { hemoglobin } = this.sample.value;
    console.log('he', this.data);
    if (hemoglobin) {
      this.data[ind].hemo.addReport = true;
      this.data[ind].hemo.hemoNa = false;
    }
    if (this.glucometry?.value) {
      this.data[ind].glu.addReport = true;
      this.data[ind].glu.gluNa = false;
    }
    if (this.thyroid?.value) {
      this.data[ind].thy.addReport = true;
      this.data[ind].thy.thyNa = false;
    }
  }

  reportsData: any;

  allReports: any;

  hemo() {}

  // dataA: any = JSON.parse(this.route.snapshot.queryParams.data);

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    window.addEventListener('beforeunload', function (e) {
      var confirmationMessage = 'o/';
      console.log('cond');
      e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      return confirmationMessage; // Gecko, WebKit, Chrome <34
    });

    //
    this.servers.getData().subscribe((val) => {
      this.data = val;
      // console.log(this.data);
      for (const i of this.data) {
        i['hemo'] = { hemoNa: true, addReport: false, viewDetails: false };
        i['glu'] = { gluNa: true, addReport: false, viewDetails: false };
        i['thy'] = { thyNa: true, addReport: false, viewDetails: false };
      }
      if (this.data[9]) {
        this.data[0].thy.viewDetails = true;
      }
    });

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
