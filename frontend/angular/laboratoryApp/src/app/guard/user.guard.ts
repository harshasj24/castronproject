import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authServices:AuthService,private router:Router){}
  canActivate()
    : boolean {
    if (this.authServices.token()&& localStorage.getItem("role")==="user") {
      return true
    }else{
      this.router.navigate(["/login"])
      return false
    }
  }

}
