import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private store : Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       return this.store.select('auth')
       .take(1)
       .map(authState => authState.authenticated)
     }
}
