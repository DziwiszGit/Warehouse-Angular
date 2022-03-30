import { Position } from "./position.model";

export class Warehouseman {
  private _id : number;
  private _name : string;
  private _surname : number;
  private _age : number;
  private _position : Position;


  constructor(id: number, name: string, surname: number, age: number, position: Position) {
    this._id = id;
    this._name = name;
    this._surname = surname;
    this._age = age;
    this._position = position;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): number {
    return this._surname;
  }

  set surname(value: number) {
    this._surname = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get position(): Position {
    return this._position;
  }

  set position(value: Position) {
    this._position = value;
  }
}
