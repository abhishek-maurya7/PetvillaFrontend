import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PetOrders } from '../../models/PetOrders';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class PetsUserService {

  constructor(private http:HttpClient) { }
  showPets() {
    const url = "http://localhost:8080/showPets";
    return this.http.get(url);
  }

  placeOrder(orders: PetOrders[]): Observable<any> {
    // Log the cart before sending it to the backend
    console.log("Cart in service: ", orders);

    const url = "http://localhost:8080/placeOrders";
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, orders, { headers, responseType:'text' });
  }

  fetchCustomer(username:string) {
    const url = "http://localhost:8080/customer/username/"+username;
    return this.http.get<Customer>(url);
  }

  searchPetsByCategory(searchParam:string){
    const url = "http://localhost:8080/showPets/category/"+searchParam;
    return this.http.get(url);
  }
}
