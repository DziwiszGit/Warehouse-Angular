import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService:LoginService,
              private router : Router) { }
  ngOnInit(): void {
    this.loginService.isAuthorization=false;
    this.router.navigateByUrl('home');
    window.location.href = 'home';
  }

}