import {Injectable} from '@angular/core';
import {concatMap, EMPTY, exhaustMap, from, map, Observable, of, switchMap} from "rxjs";
import {Product} from "../../models/product.model";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/api/products");
  }

  public getInfoAboutExist(product: Product): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:8080/api/products/check/" + product.name);
  }

  public changeWeight(product: Product | undefined) {
    this.http.put("http://localhost:8080/api/products/update", product).subscribe();
  }

  public updateProducts(product: Product): Observable<Product[]> {
    return this.getInfoAboutExist(product).pipe(
      switchMap(info => {
        if (info) {
          console.log("Product exist !!!");
          window.alert("Product exist !!!");
          return EMPTY
        }

        return this.addProduct(product).pipe(
          switchMap(_ => this.getProducts())
        )
      }));
  }

  public addProduct(product: Product): Observable<unknown> {
    return this.http.post("http://localhost:8080/api/products", product)
  }
}
