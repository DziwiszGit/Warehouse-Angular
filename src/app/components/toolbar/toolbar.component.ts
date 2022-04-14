import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {AppComponent} from "../../app.component";
import {ToolbarService} from "../../services/toolbar/toolbar.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  @Output() public featureSelected = new EventEmitter<string>();

  public isLogin : boolean = this.loginService.isAuthorization;

  onSelect(feature: string){
    if(this.loginService.isAuthorization !== this.isLogin){
      this.isLogin=this.loginService.isAuthorization;
    }
    this.featureSelected.emit(feature);
  }
  constructor(private loginService : LoginService) {}

  ngOnInit(): void {
  }

}
