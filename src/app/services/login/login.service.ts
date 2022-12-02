import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, EMPTY, map, tap} from "rxjs";
import {Authentication} from "../../models/authentication"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authentication$ = new BehaviorSubject<Authentication | null>(null)
  isLoggedIn$ = this.authentication$.asObservable().pipe(map(auth => !!auth))

  get authSnapshot() {
    return this.authentication$.value
  }

  constructor(private http: HttpClient) {
  }


  public authorization(login: string, password: string) {
    let headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(login + ":" + password));
    this.http.get<boolean>("http://localhost:8080/api", {headers: headers}).pipe(
      tap(_ => {
        this.authentication$.next({
          Password: password,
          Username: login
        })
      }),
      catchError(err => {
        console.log("Fail with return")
        return EMPTY
      })
    ).subscribe()
  }

  logout() {
    this.authentication$.next(null)
  }
}
