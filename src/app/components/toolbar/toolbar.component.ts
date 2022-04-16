import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  public isLogin : boolean = this.loginService.isAuthorization;

  onSelect(){
    if(this.loginService.isAuthorization !== this.isLogin){
      this.isLogin=this.loginService.isAuthorization;
    }
  }
  constructor(private loginService : LoginService,
              private router : Router) {}

  ngOnInit(): void {
  }

}
