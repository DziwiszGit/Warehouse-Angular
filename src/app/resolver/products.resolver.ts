import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Product} from "../models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsResolver implements Resolve<Product[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
    // return this.productService.getProducts().pipe(
    //   tap(products => this.productService.setProducts(products))
    // );

    return of([])
  }
}
