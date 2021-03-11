import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getProducts(searchparam : any): Observable<any> {
    console.log(searchparam);
    return this.http.post<any>("https://localhost:44385/api/product",searchparam,this.httpHeader).pipe()
    
  }
}
