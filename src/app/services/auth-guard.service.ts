import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor( private auth: AuthService, private router: Router) { }
  
  canActivate() {
    if(this.auth.getValid()) return true;

    this.router.navigate(["/"]);
    return false;
  }
}
