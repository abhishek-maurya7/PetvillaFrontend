import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(credientials:Login) {
    const url = "http://localhost:8080/login";
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(url, credientials, { headers, responseType: 'text' });
  }
}
