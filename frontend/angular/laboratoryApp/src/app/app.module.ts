import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EntersamplesComponent } from './entersamples/entersamples.component';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdashbordComponent } from './userdashbord/userdashbord.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { LoadersComponent } from './loaders/loaders.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    LoginComponent,
    RegisterComponent,
    EntersamplesComponent,
    LandingpageComponent,
    UserdetailsComponent,
    UserdashbordComponent,
    LoadersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
    }),
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthorizationInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
