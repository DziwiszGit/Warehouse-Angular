import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  userLogged$: Observable<boolean>;

  constructor(private loginService: LoginService) {
    this.userLogged$ = loginService.isLoggedIn$
  }

  ngOnInit(): void {}

}
