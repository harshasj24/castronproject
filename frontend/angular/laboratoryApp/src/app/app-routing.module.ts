import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EntersamplesComponent } from './entersamples/entersamples.component';

import { RegisterComponent } from './register/register.component';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';
import { AuthgardGuard } from './guard/authgard.guard';
import { UserGuard } from './guard/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'landingpage', component: LandingpageComponent },
  {
    path: 'dashbord',
    component: DashbordComponent,
    canActivate: [AuthgardGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthgardGuard],
  },
  {
    path: 'entersamples',
    component: EntersamplesComponent,
    canActivate: [AuthgardGuard],
  },

  {
    path: 'userdetails',
    component: UserdetailsComponent,
    canActivate: [AuthgardGuard],
  },
  {
    path: 'yoursample/:email',
    component: UserdashbordComponent,
    canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
