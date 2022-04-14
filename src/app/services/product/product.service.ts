import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../login/login.service";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // @ts-ignore
  public getProducts(): Observable<Product[]> {
    if (this.loginservice.isAuthorization) {
      let headers = this.loginservice.header;
      return this.http.get<Product[]>("http://localhost:8080/api/products",
        {headers:headers});
    }
  }
  constructor(private http:HttpClient,private loginservice:LoginService) { }
}
