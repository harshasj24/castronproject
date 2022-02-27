import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entersamples',
  templateUrl: './entersamples.component.html',
  styleUrls: ['./entersamples.component.css'],
})
export class EntersamplesComponent implements OnInit, AfterViewInit {
  constructor(private servers: AuthService) {}
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

  sampleFormData() {}
  names: any;
  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
