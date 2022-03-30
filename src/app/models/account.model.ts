import {Warehouseman} from "./warehouseman.model";

export class Account {
  private _id : number;
  private _login : string;
  private _password : string;
  private _warehouseman : Warehouseman;


  constructor(id: number, login: string, password: string, warehouseman: Warehouseman) {
    this._id = id;
    this._login = login;
    this._password = password;
    this._warehouseman = warehouseman;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get warehouseman(): Warehouseman {
    return this._warehouseman;
  }

  set warehouseman(value: Warehouseman) {
    this._warehouseman = value;
  }
}
