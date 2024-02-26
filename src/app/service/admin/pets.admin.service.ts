import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PetList } from '../../models/PetList';

@Injectable({
  providedIn: 'root'
})
export class PetsAdminService {

  constructor(private http:HttpClient) { }

  showPets() {
    const url = "http://localhost:8080/showPets";
    return this.http.get(url);
  }

  create(pet:PetList) {
    const url = "http://localhost:8080/addPet";
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, pet, {headers});
  }

  delete(petId:number) {
    const url = "http://localhost:8080/deletePet/" + petId;
    return this.http.delete(url, { responseType: 'text' });
  }
}
