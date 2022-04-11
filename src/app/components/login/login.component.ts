import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(private formBulider: FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBulider.group({
      login:[''],
      password:['']
    })
  }

  public authorization(){
    let headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Origin', 'http://localhost:8080')
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        .set('Authorization','Basic ' +
      btoa(this.loginForm.value.login+":"+this.loginForm.value.password));
    this.http.get("http://localhost:8080/api",{headers:headers})
      .subscribe()

  }
}
