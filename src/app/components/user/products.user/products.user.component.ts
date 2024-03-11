import { Component } from '@angular/core';
import { ProductsUserService } from '../../../service/user/products.user.service';
import { PetsUserService } from '../../../service/user/pets.user.service';
import { Router } from '@angular/router';
import { ProductOrders } from '../../../models/ProductOrders';
import { Customer } from '../../../models/Customer';
import { ProductList } from '../../../models/ProductList';

@Component({
  selector: 'app-products.user',
  templateUrl: './products.user.component.html',
  styleUrl: './products.user.component.css'
})
export class ProductsUserComponent {
  constructor(private productService: ProductsUserService, private petsService:PetsUserService, private route: Router) { }
  products: any;
  ngOnInit() {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      const username = sessionStorage.getItem('username');
      if (username) {
        console.log("username", username)
        this.petsService.fetchCustomer(username).subscribe({
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
    this.productService.showProducts().subscribe({
      next: (response) => this.products = response,
      error: (error) => console.log(error)
    })
  }

  cart: ProductOrders[] = [];
  customer = new Customer(0, 'abhishek2', 'Abhishek', 'Maurya', 'abhishek@gmail.com', 7845212356, 'Dombivli, India');
  total: number = 0;
  productOrderQuantity: number = 1;
  addToCart(product: ProductList) {
    const order = new ProductOrders(0, product, new Date(), this.productOrderQuantity, 'confirmed', this.customer);
    this.cart.push(order);
    // Reset quantity for next product
    this.productOrderQuantity = 1;
    // Recalculate total
    this.calculateTotal();
    alert(`${order.product.name} added to cart.`)
  }

  updateQuantity(order: ProductOrders, event: any) {
    const quantity = event.target ? event.target.value : null;
    if (quantity !== null) {
      order.quantity = parseInt(quantity, 10);
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.total = this.cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);
  }

  placeOrder() {
    this.productService.placeOrder(this.cart).subscribe({
      next: (response) => {
        console.log(response);
        this.route.navigate(['/success'])
      },
      error: (error) => alert(error)
    })
  }

  searchTerm: string = '';
  searchProductsByCategory() {
    console.log(this.products)
    this.products = this.products.filter((pet: { productCategory: string }) => pet.productCategory === this.searchTerm);
    if(this.products.length == 0) {
      alert("Nothing matching found.");
      return;
    }
    alert(`Products have been filtered. ${this.products.length} products found.`)
  }

  resetFilter() {
    this.ngOnInit()
  }
}
