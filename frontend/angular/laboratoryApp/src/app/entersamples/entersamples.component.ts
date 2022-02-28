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
  constructor(private apiServices: ApiService) {}
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
    hemoglobin: new FormControl(''),
    neutrophils: new FormControl(''),
    eosinophiles: new FormControl(''),
    basophills: new FormControl(''),
    pavkedCellVolume: new FormControl(''),
    totalCount: new FormControl(''),
    lymphocytes: new FormControl(''),
    monocytes: new FormControl(''),
    redBloodCells: new FormControl(''),
    mvc: new FormControl(''),
  });

  glucoForm = new FormGroup({
    fastingbloodsugar: new FormControl(''),

    postprandilabloodsugar: new FormControl(''),
    hba1c: new FormControl(''),
    calcium: new FormControl(''),
  });

  thyForm = new FormGroup({
    t3Total: new FormControl(''),

    thyroxine: new FormControl(''),
    tsh: new FormControl(''),
  });

  sampleFormData() {
    console.log(this.hemoForm.value);
    console.log(this.patientName?.value);
    let date = new Date();
    let sampleDate = `${date.getMonth()} ${date.getDay()},${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let sId = Math.floor(Math.random() * 100);
    let mydata = {
      _id: this.patientName?.value,
      date: sampleDate,
      sampleId: sId,
      haematology: [this.hemoForm.value],
    };
    this.apiServices.addReports(mydata).subscribe((val) => {
      console.log(val);
    });
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
