import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";

import * as firebase from 'firebase';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.action'

@Injectable()
export class Authservice {
    token: string;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromApp.AppState>) { }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null
    }

    signOut() {
        firebase.auth().signOut()
            .catch(
                (error) => console.log(error)
            );
        this.token = null;
    }

}