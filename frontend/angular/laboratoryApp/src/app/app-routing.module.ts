import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EntersamplesComponent } from './entersamples/entersamples.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { HemoglobinComponent } from './hemoglobin/hemoglobin.component';
import { RegisterComponent } from './register/register.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'entersamples',
    component: EntersamplesComponent,
  },
  { path: 'entersamples/hemoglobin', component: HemoglobinComponent },
  { path: 'entersamples/glucometry', component: GlucometryComponent },
  { path: 'entersamples/thyroid', component: ThyroidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
