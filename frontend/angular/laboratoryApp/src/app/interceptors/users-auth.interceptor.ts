import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

// @Injectable()
// export class UsersAuthInterceptor implements HttpInterceptor {
// constructor(private authServices: AuthService) {}

// token: any = this.authServices.token();
// intercept(request: HttpRequest<any>, handler: HttpHandler) {
//   // const modifiedRequest = request.clone({
//   //   headers: request.headers.append('authorization', `bearer ${this.token}`),
//   // });
//   return handler.handle(this.token);
// }
// }     
