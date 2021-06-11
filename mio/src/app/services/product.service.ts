import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Interfaces/product';

@Injectable({
  providedIn : "root"
})
export class ProductService {

  constructor(private http : HttpClient) { 

  }
  
  public getProducts() : Observable<IProduct[]>{
    let url = "http://localhost:8080/getProducts"
    return this.http.get<IProduct[]>(url);
  }

}
