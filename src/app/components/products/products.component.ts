import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myControl = new FormControl();
  productList: Product[] = [];
  filteredOptions: Observable<Product[]> | undefined;
  displayedColumns: string[] = ['id', 'name', 'weight'];
  productChosen: Product | undefined;

  constructor(private service:ProductService) {}



  ngOnInit() {
    this.service.getProducts().subscribe(res=>{
      this.productList=res;
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  selected($event: string): void {
    const idFromEvent = Number($event);
    this.productChosen = this.productList.find(value => value.id == idFromEvent);
  }
  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.productList.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  getchosen(){
    return this.productChosen?.id;
  }


}
