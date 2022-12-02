import {Injectable} from "@angular/core";
import {delay, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthResolver {
  constructor(private http: HttpClient) {}

  loadUserData(): Promise<any> {
    return of(1).pipe(
      delay(0)
    ).toPromise()
  }
}
