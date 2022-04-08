import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/api/products");
  }
  constructor(private http:HttpClient) { }
}
