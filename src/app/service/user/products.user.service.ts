import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOrders } from '../../models/ProductOrders';

@Injectable({
  providedIn: 'root'
})
export class ProductsUserService {

  constructor(private http:HttpClient) { }
  
  showProducts() {
    const url = "http://localhost:8080/showProducts";
    return this.http.get(url);
  }

  placeOrder(orders:ProductOrders[]) {
    const url = "http://localhost:8080/placeProductOrder";
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, orders, {headers, responseType:'text'})
  }
}
