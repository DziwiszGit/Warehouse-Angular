import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToolbarService} from "../toolbar/toolbar.service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }

  public isAuthorization : boolean = false;
  public login : string ='';
  public password : string ='';
  public header : HttpHeaders = new HttpHeaders();

  public authorization(login:string,password:string){
  let headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Origin', 'http://localhost:8080')
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Authorization','Basic ' +
      btoa(login+":"+password));
    this.header = headers;
    this.http.get<boolean>("http://localhost:8080/api",{headers:headers})
    .subscribe(value => {
      this.isAuthorization=value;
      this.login=login;
      this.password=password;}
  ,error => {console.log("Fail with return")})
  }
}
