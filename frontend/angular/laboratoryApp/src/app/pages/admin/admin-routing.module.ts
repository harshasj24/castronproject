import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { LabComponent } from './components/lab/lab.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StaffComponent } from './components/staff/staff.component';
import { PatientComponent } from './components/patient/patient.component';
import { TestsComponent } from './components/tests/tests.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'lab',
        component: LabComponent,
      },
      {
        path:"lab/staff",
        component:StaffComponent
      },
      {
        path:"lab/patient",
        component:PatientComponent
      },
      {
        path:"lab/tests",
        component:TestsComponent
      }
    ],
  },
  { path: 'test/create-test', component: CreateTestComponent },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
