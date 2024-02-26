import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer';
import { Login } from '../../models/Login';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  addNewUser(credentials: Login) {
    const url = "http://localhost:8080/registerUser";
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, credentials, {headers, responseType:'text'});
  }

  addNewCustomer(customer:Customer) {
    const url = "http://localhost:8080/registerCustomer";
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, customer, {headers});
  }

  checkUsernameAvailability(username:string){
    const url = "http://localhost:8080/checkUsernameAvailability/" + username;
    return this.http.get<boolean>(url);
  }
}
