import { Action } from "@ngrx/store";

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';


export class TrySignup implements Action {
    readonly type = TRY_SIGNUP
    constructor(public payload: { userName: string, password: string }) { 
    }
}

export class TrySignin implements Action {
    readonly type = TRY_SIGNIN
    constructor(public payload: { userName: string, password: string }) {}
}

export class Signup implements Action {
    readonly type = SIGN_UP
}
export class Signin implements Action {
    readonly type = SIGN_IN
}

export class Logout implements Action {
    readonly type = LOGOUT
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: string) { }
}

export type AuthActions = Signin | Signup | SetToken | Logout | TrySignup