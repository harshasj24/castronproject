import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-entersamples',
  templateUrl: './entersamples.component.html',
  styleUrls: ['./entersamples.component.css'],
})
export class EntersamplesComponent implements OnInit, AfterViewInit {
  constructor(private apiServices: ApiService, private router: Router) {}
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

  count: any = 0;
  countDa() {
    this.count++;
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

  sampleFormData() {
    console.log(this.hemoForm.value);
    console.log(this.patientName?.value);
    let date = new Date();
    let sampleDate = `${date.getMonth()} ${date.getDay()},${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let sId = Math.floor(Math.random() * 100);

    let hemo: any = [];
    let gluR: any = [];
    let thy: any = [];
    if (this.hemoglobin?.value) {
      hemo = [this.hemoForm.value];
    }

    if (this.glucometry?.value) {
      gluR = [this.glucoForm.value];
    }

    if (this.thyroid?.value) {
      thy = [this.thyForm.value];
    }

    let mydata = {
      _id: this.patientName?.value,
      date: sampleDate,
      sampleId: sId,
      haematology: hemo,
      glucometry: gluR,
      thyroid: thy,
    };

    if (
      (this.hemoForm.valid || this.glucoForm.valid || this.thyForm.valid) &&
      this.patientName?.value
    ) {
      this.apiServices.addReports(mydata).subscribe((val) => {
        console.log(val);
      });
      this.router.navigate(['/dashbord']);
    } else {
      window.alert('please provide the details');
    }
  }
  names: any;
  ngOnInit(): void {
    this.apiServices.userDetails().subscribe((name) => {
      this.names = name;
      this.names = this.names.data;
      console.log(this.names[0]._id);
    });
  }
  ngAfterViewInit(): void {}
}
