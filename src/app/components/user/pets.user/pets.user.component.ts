import { Component } from '@angular/core';
import { PetsUserService } from '../../../service/user/pets.user.service';
import { PetOrders } from '../../../models/PetOrders';
import { Customer } from '../../../models/Customer';
import { PetList } from '../../../models/PetList';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-pets.user',
  templateUrl: './pets.user.component.html',
  styleUrl: './pets.user.component.css'
})
export class PetsUserComponent {
  constructor(private petsUserService: PetsUserService, private route: Router) { }
  pets: any;
  cart: PetOrders[] = [];
  total: number = 0
  customer = new Customer(0, '', '', '', '', 0, '')
  ngOnInit() {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      const username = sessionStorage.getItem('username');
      if (username) {
        console.log("username", username)
        this.petsUserService.fetchCustomer(username).subscribe({
          next: (response) => {
            console.log(response);
            this.customer.cid = response.cid;
            this.customer.username = response.username;
            this.customer.cname = response.cname;
            this.customer.csurname = response.csurname;
            this.customer.cemail = response.cemail;
            this.customer.cphone = response.cphone;
            this.customer.caddress = response.caddress;
          },
          error: (error) => console.log(error)
        });
      } else {
        console.log("Token not found in sessionStorage");
        this.route.navigate(['/login'])
      }
    } else {
      console.log("sessionStorage is not available in this environment");
    }
    this.petsUserService.showPets().subscribe({
      next: (response) => this.pets = response,
      error: (error) => console.log(error)
    })
  }

  addToCart(pet: PetList) {
    const petOrdersModels = new PetOrders(0, this.customer, pet, new Date(), "confirmed");
    this.cart.push(petOrdersModels);
    for (let cartItem of this.cart) {
      this.total += cartItem.pet.price;
    }
    alert(`${petOrdersModels.pet.name} added to cart.`)
  }

  placeOrder() {
    this.petsUserService.placeOrder(this.cart).subscribe({
      next: (response) => {
        console.log(response);
        this.route.navigate(['/success'])
      },
      error: (error) => {
        alert(error)
      }
    });
  }

  searchTerm: string = '';
  searchPetsByCategory() {
    this.pets = this.pets.filter((pet: { category: string }) => pet.category === this.searchTerm);
    if(this.pets.length == 0) {
      alert("Nothing matching found.")
      return;
    }
    alert(`${this.pets.length} matching pets found.`)
  }

  resetFilter() {
    this.ngOnInit();
  }
}
