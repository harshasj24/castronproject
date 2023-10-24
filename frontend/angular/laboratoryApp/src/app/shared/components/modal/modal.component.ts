import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalDataConfig } from './models/ModalConfig';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: ModalDataConfig,
    private matDilofRef: MatDialogRef<ModalComponent>
  ) {}

  successIcon = 'assets/check_circle_smooth.jpg';

  ngOnInit(): void {
    console.log(this.modalData);
  }
  closeModal() {
    this.matDilofRef.close();
  }
}
