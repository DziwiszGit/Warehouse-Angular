import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import {LoginService} from "../../services/login/login.service";
import {ToolbarComponent} from "../toolbar/toolbar.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(ToolbarComponent) toolbar : any;
  private homeString : string = 'home';
  public loginForm !: FormGroup;
  constructor(private formBulider: FormBuilder,
              private service:LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.formBulider.group({
      login:[''],
      password:['']
    })
  }
  public authorization():void{
    this.service.authorization(this.loginForm.value.login,
      this.loginForm.value.password);
    this.loginForm.reset();
    this.toolbar.onSelect(this.homeString);
  }
}
