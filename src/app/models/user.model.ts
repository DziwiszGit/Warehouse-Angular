import {Warehouseman} from "./warehouseman.model";
import {Role} from "./role.model";

export class User {
  id : number;
  username : string;
  password : string;
  warehouseman : Warehouseman;
  role : Role;


  constructor(id: number, username: string, password: string, warehouseman: Warehouseman,role:Role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.warehouseman = warehouseman;
    this.role=role;
  }

}
