export class Product {
  id : number;
  name : string;
  weight : number;
  date : number;

  constructor(id: number, name: string, weight: number, date: number) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.date = date;
  }

  getInfo (): string{
    return (
      "ID="+ this.id +
      "------Name="+ this.name +
      "------Weight="+ this.weight +
      "------Date="+ this.date);
  }

}

