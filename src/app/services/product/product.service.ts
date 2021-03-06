import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient,
              private loginservice:LoginService,
              private router : Router) { }

  // @ts-ignore
  public getProducts(): Observable<Product[]> {
    if (this.loginservice.isAuthorization) {
      let headers = this.loginservice.header;
      return this.http.get<Product[]>("http://localhost:8080/api/products",
        {headers:headers});
    }
  }

  public getInfoAboutExist(product : Product) : Observable<boolean>{
      let headers = this.loginservice.header;
      return this.http.get<boolean>("http://localhost:8080/api/products/check/"+product.name
        ,{headers:headers});
  }

  public changeWeight(product: Product | undefined){
    if(this.loginservice.isAuthorization) {
      let headers = this.loginservice.header;
      this.http.post("http://localhost:8080/api/products/update"
        , product
        , {headers: headers}).subscribe();
    }
  }


  public addProduct(product : Product){
    if (this.loginservice.isAuthorization) {
      let headers = this.loginservice.header;
      this.getInfoAboutExist(product).subscribe(info => {
        if (info) {
          this.http.post("http://localhost:8080/api/products"
            , product
            , {headers: headers}).subscribe();
          this.router.navigateByUrl('home');
        } else{
          console.log("Product exist !!!");
          window.alert("Product exist !!!");
        }
      });
    }
  }
}
