import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;

  constructor(private formBulider: FormBuilder,
              private service: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBulider.group({
      login: [''],
      password: ['']
    })
  }

  public authorization(): void {
    this.service.authorization(this.loginForm.value.login,
      this.loginForm.value.password);
    this.loginForm.reset();
    this.router.navigateByUrl('home');
  }
}
