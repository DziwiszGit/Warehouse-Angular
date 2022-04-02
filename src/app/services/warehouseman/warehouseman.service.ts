import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {HttpClient} from "@angular/common/http";
import {Warehouseman} from "../../models/warehouseman.model";

@Injectable({
  providedIn: 'root'
})
export class WarehousemanService {
  public getWarehouseman(): Observable<Warehouseman[]> {
    return this.http.get<Warehouseman[]>("http://localhost:8080/warehousemen");
  }
  constructor(private http:HttpClient) { }
}
