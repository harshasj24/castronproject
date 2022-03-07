import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private authSerivies:AuthService) {}




  intercept(request: HttpRequest<unknown>, handler: HttpHandler){

  const modifiedRequest=request.clone({
    headers:request.headers.append("authorization", `bearer ${this.authSerivies.token()}`)
  })
    return handler.handle(modifiedRequest);
  }
}
