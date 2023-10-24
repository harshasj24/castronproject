import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LabComponent } from './components/lab/lab.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StaffComponent } from './components/staff/staff.component';
import { PatientComponent } from './components/patient/patient.component';
import { TestsComponent } from './components/tests/tests.component';

@NgModule({
  declarations: [AdminComponent, CreateTestComponent, AddUserComponent, LabComponent, DashboardComponent, StaffComponent, PatientComponent, TestsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
})
export class AdminModule {}
