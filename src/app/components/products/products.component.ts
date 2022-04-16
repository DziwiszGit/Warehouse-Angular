import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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
  productWithNewWeight : Product | undefined;
  buttonType: any;
  valuesToChange !: FormGroup;
  newProduct !: FormGroup;


  constructor(private productService:ProductService,
              private formBulider: FormBuilder) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res=>{
      this.productList=res;
    });

    this.valuesToChange = this.formBulider.group({
      weight:[]
    })

    this.newProduct = this.formBulider.group({
      name: [],
      weight: []
    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  selected($event: string): void {
    const idFromEvent = Number($event);
    this.productChosen = this.productList.find(value => value.id == idFromEvent);
    this.productWithNewWeight= this.productChosen;
  }
  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();
    return this.productList.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  getChosenProductId(){
   return this.productChosen?.id;
  }
  getChosenProductWeight(){
    return this.productChosen?.weight;
  }

  addNewProduct():void{
      this.productService.addProduct(
        new Product(0,
          this.newProduct.value.name,
          this.newProduct.value.weight,
          Date.now()))
  }

  onSubmit(buttonType: string):void{
    if(buttonType==="add") {
      // @ts-ignore
      this.productWithNewWeight?.weight +=
        this.valuesToChange.value.weight;
      this.productService.changeWeight(this.productWithNewWeight);
    }
    if(buttonType==="pick"){
      // @ts-ignore
      this.productWithNewWeight?.weight -=
        this.valuesToChange.value.weight;
      this.productService.changeWeight(this.productWithNewWeight);
    }
  }

}
