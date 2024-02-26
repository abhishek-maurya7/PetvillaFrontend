import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from '../../models/ProductList';

@Injectable({
  providedIn: 'root'
})
export class ProductsAdminService {

  constructor(private http:HttpClient) { }
  showProducts() {
    const url = "http://localhost:8080/showProducts";
    return this.http.get(url);
  }

  delete(productId:number) {
    const url = "http://localhost:8080/product/delete/"+ productId;
    // Specify responseType as text
    return this.http.delete(url, { responseType: 'text' });
  }

  addNewProduct(newProduct:ProductList){
    const url = "http://localhost:8080/product/addNewProduct";
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, newProduct, {headers});
  }
}
