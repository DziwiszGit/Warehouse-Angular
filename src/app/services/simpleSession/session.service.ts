import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user.model";
import {Warehouseman} from "../../models/warehouseman.model";
import {Position} from "../../models/position.model";
import {Role} from "../../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userBehaviorSubject = new BehaviorSubject<User>(
    new User(0,'','',
      new Warehouseman(0,'','',0,Position.MANAGER)
      , Role.USER));




  constructor() { }
}
