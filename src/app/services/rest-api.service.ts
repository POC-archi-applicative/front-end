import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../utils/product";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getCatalog = (): Observable<Product> => {
    let url = "http://localhost:8080/allProducts";
    return this.http.get<Product>(url, this.httpOptions);
  };


}
