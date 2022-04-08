import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createAuthorizationHeader(header : HttpHeaders){
    header.append('Access-Control-Allow-Origin', '*')
    header.append('Content-Type', 'application/json')
    header.append('Access-Control-Allow-Headers','Content-Type')
    header.append('Authorization','Basic' +
    btoa("root:root"))
    header.append('root','root')
  }


  public loginForm !: FormGroup;

  constructor(private formBulider: FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBulider.group({
      login:[''],
      password:['']
    })
  }


  login() {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    this.http.get("localhost:8080/api/user",{
      headers:headers
    } )
      .subscribe(res=>{
        alert("Login successfull");
        this.loginForm.reset();
      })
    console.log(headers)
  }
}
