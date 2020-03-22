import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Authservice } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService : Authservice) { }

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       return this.authService.isAuthenticated();
  }

}
