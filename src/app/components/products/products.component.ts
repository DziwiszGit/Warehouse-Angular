import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myControl = new FormControl();
  productList: Product[] = [
    new Product(1,"Coal",123.23,"10.03.2022"),
    new Product(2,"Stone",321.33,"11.03.2022")
  ];
  filteredOptions: Observable<Product[]> | undefined;


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.productList.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
