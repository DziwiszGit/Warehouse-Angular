import { Injectable } from '@angular/core';
import {User} from "../../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public header : HttpHeaders = new HttpHeaders();
  constructor(private http:HttpClient) { }

  addAccount(user : User){
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json')
      .set('Authorization','Basic ' + btoa("root:root"));
    this.header = headers;
    this.http.post("http://localhost:8080/api/user",user,{headers:headers })
      .subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      });

  }
}
