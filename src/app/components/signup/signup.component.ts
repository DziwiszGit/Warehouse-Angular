import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {Warehouseman} from "../../models/warehouseman.model";
import {Position} from "../../models/position.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SignupService} from "../../services/signup/signup.service";
import {Role} from "../../models/role.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public accountForm !: FormGroup;

  warehouseman : Warehouseman = new Warehouseman(0,'','',0,Position.MANAGER);
  account : User = new User(0,'','',this.warehouseman,Role.USER);

  constructor(private formBulider: FormBuilder,
              private signupService : SignupService,
              private router :Router) { }

  ngOnInit(): void {
    this.accountForm = this.formBulider.group({
      username:[''],
      password:[''],
      name:[''],
      surname:[''],
      age:[''],
      position:['']
    })
  }

  addAccount():void{
    this.account.username=this.accountForm.value.username;
    this.account.password=this.accountForm.value.password;
    this.warehouseman.name= this.accountForm.value.name;
    this.warehouseman.surname= this.accountForm.value.surname;
    this.warehouseman.age= this.accountForm.value.age;
    this.warehouseman.position= this.accountForm.value.position;
    this.signupService.addAccount(this.account);
    this.accountForm.reset();
    this.router.navigateByUrl('home');
  }
}
