import {Injectable} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Warehouseman} from "../../models/warehouseman.model";
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class WarehousemanService {
  // @ts-ignore
  public getWarehouseman(): Observable<Warehouseman[]> {
    return this.http.get<Warehouseman[]>("http://localhost:8080/api/warehousemen");
  }
  public deleteWarehouseman(id: number | undefined): Observable<Warehouseman[]> {
    // @ts-ignore
    return this.http.delete("http://localhost:8080/api/user/" + id)
      .subscribe()
  }
  constructor(private http: HttpClient) {
  }
}
