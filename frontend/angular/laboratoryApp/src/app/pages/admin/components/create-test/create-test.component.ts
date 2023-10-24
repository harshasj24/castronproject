import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css'],
})
export class CreateTestComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _api: ApiService,
    private _snackbar: MatSnackBar,
    private _modal:ModalService
  ) {}

  createTestForm!: FormGroup;

  handleFormSubmit() {
    if (this.createTestForm.invalid) return;
    this._api.createTest(this.createTestForm.value).subscribe({
      next: (res) => {
        this.createTestForm.reset()
        this._modal.openSuccessModal('Test Create Sucessully')

      },
      error: (err) => {
        this._snackbar.open('Failed', 'X', {
          duration: 5000,
          panelClass: 'error',
        });
      },
    });
  }
  get testOutComes() {
    return this.createTestForm.controls['testOutComes'] as FormArray;
  }

  addNewOutCome(index: number) {
    this.testOutComes.insert(
      index + 1,
      this.fb.group({
        outcomeTestName: [''],
        outcomeTestValue: [''],
      })
    );
  }

  removeOutCome(index: number) {
    this.testOutComes.removeAt(index);
  }

  initializeForm() {
    this.createTestForm = this.fb.group({
      testName: ['', [Validators.required]],
      testPrice: ['', [Validators.required]],
      testOutComes: this.fb.array([
        this.fb.group({
          outcomeTestName: ['', [Validators.required]],
          outcomeTestValue: ['', [Validators.required]],
        }),
      ]),
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
