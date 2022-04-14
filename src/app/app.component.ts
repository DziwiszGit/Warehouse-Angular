import { Component } from '@angular/core';
import {LoginService} from "./services/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'home';

  public onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  title = 'AngularWarehouse';
}
