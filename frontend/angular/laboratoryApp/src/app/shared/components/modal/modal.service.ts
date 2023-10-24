import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';
import { ModalDataConfig, modalType } from './models/ModalConfig';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private matDailog: MatDialog) {}

  private createDataConfig(type: modalType, message: string): ModalDataConfig {
    return {
      type: type,
      message,
      buttonTitle:"Done",
    };
  }

  openSuccessModal(message: string = '') {
    this.matDailog.open(ModalComponent, {
      data: this.createDataConfig('success', message),
      width: '500px',
      height: 'fit-content',
    });
  }
}
