import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Authservice } from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService :Authservice){}

    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
       const copiedReq = req.clone({params : req.params.set('auth',this.authService.getToken())})
       return next.handle(copiedReq);
    }

}