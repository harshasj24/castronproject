import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { Patient } from 'src/app/shared/models/Patient';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private _api: ApiService, private _snackbar: MatSnackBar) {}

  addPatientFormGroup = new FormGroup({
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });

  get addPatientFormConrol() {
    return this.addPatientFormGroup.controls;
  }
  ngOnInit(): void {
  }
  submitAddPatient() {
    if (this.addPatientFormGroup.invalid) {
      alert('please provide the proper details');
      return;
    }
    this._api.addPatient(this.addPatientFormGroup.value).subscribe({
      next: (res) => {
        this._snackbar.open(
          `User Created Sucessully - ${res?.patientId}`,
          'X',
          {
            duration: 5000,
            panelClass: 'success',
          }
        );
      },
      error: () => {
        this._snackbar.open('Failed', 'X', {
          duration: 5000,
          panelClass: 'error',
        });
      },
    });
  }
}
