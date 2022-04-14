import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Warehouseman} from "../../models/warehouseman.model";
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class WarehousemanService {
  // @ts-ignore
  public getWarehouseman(): Observable<Warehouseman[]> {
    if (this.loginService.isAuthorization) {
      let headers = this.loginService.header;
      return this.http.get<Warehouseman[]>("http://localhost:8080/api/warehousemen",
        {headers:headers});
    }

  }
  constructor(private http:HttpClient,private loginService:LoginService) { }
}
