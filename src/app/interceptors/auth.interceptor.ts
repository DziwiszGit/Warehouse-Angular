import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {LoginService} from "../services/login/login.service";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authSnapshot = this.loginService.authSnapshot;

    if (authSnapshot) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',  'Basic ' + btoa(authSnapshot.Username + ":" + authSnapshot.Password))
      });

      return next.handle(cloned)
   }

    return next.handle(req);
  }
}
