import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private modal: ModalService) {}

  panelOpenState = false;

  ngOnInit(): void {}

  openModal() {
    this.modal.openSuccessModal(
      'User has been created, please share the User ID with the user'
    );
  }
}
