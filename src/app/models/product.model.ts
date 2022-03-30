export class Product {
  private _id : number;
  private _name : string;
  private _weight : number;
  private _date : string;

  constructor(id: number, name: string,weight: number,date:string) {
    this._id = id;
    this._name = name;
    this._weight = weight;
    this._date = date;
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

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

}

