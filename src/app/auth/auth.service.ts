import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class Authservice {
    token: string;
    constructor(private route: ActivatedRoute,
        private router: Router) { }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        );
                    this.router.navigate(['/'], { relativeTo: this.route })
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    getToken() {
        firebase.auth().currentUser.getToken()
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