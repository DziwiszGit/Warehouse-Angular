import { Position } from "./position.model";

export class Warehouseman {
  id : number;
  name : string;
  surname : string;
  age : number;
  position : Position;


  constructor(id: number, name: string, surname: string, age: number, position: Position) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
  }

  getInfo (): string{
    return (
      "ID="+ this.id +
      "------Name="+ this.name +
      "------Surname="+ this.surname +
      "------Age="+ this.age +
      "------Position="+ this.position);
  }

}
