import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _authService:AuthService, private _router:Router){}

  canActivate() {
    if(!this._authService.isLogged()){
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }

  canActivateChild() {
    if(!this._authService.isLogged()){
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
