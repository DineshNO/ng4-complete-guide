
import {mergeMap, switchMap, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { from as fromPromise } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do'; 

import * as AuthActions from './auth.action';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {

    @Effect()
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP).pipe(
        map((action: AuthActions.TrySignup) => action.payload),
        switchMap((authData: { userName: string, password: string }) => fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.userName, authData.password))),
        switchMap(() => fromPromise(firebase.auth().currentUser.getIdToken())),
        mergeMap(token => [
            { type: AuthActions.SIGN_UP },
            { type: AuthActions.SET_TOKEN, payload: token }
        ]),);

    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN).pipe(
        map((action: AuthActions.TrySignin) => action.payload),
        switchMap((authData: { userName: string, password: string }) => fromPromise(firebase.auth().signInWithEmailAndPassword(authData.userName, authData.password))),
        switchMap(() => fromPromise(firebase.auth().currentUser.getIdToken())),
        mergeMap(token => {
            this.router.navigate(['/']);
            return [
                { type: AuthActions.SIGN_IN },
                { type: AuthActions.SET_TOKEN, payload: token }
            ]
        }),);


    @Effect({ dispatch: false })
    authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do(() => this.router.navigate(['/']));


    constructor(private actions$: Actions, private router: Router) { }

}
