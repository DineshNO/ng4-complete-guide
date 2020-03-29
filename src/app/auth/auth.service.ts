import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from "@angular/router";
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.action'
import { Store } from "@ngrx/store";

@Injectable()
export class Authservice {
    token: string;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private store : Store<fromApp.AppState>) { }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                user =>  {
                    this.store.dispatch(new AuthActions.Signup());
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.store.dispatch(new AuthActions.SetToken(token))
                )
            }
            )
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.store.dispatch(new AuthActions.Signin())
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.store.dispatch(new AuthActions.SetToken(token))
                        );
                    this.router.navigate(['../'], { relativeTo: this.route })
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    getToken() {
      firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) =>this.token = token
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