import { Component } from '@angular/core';
import { SignupService } from '../../../service/auth/signup.service';
import { Customer } from '../../../models/Customer';
import { Login } from '../../../models/Login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private signupService:SignupService){}
  usernameAvailable: boolean = true; 
  checkingAvailability: boolean = false; 
  credentials = new Login('', '')
  customer = new Customer(0, '', '', '', '', 0, '')

  checkUsernameAvailability() {
    // Check if username is available only if the username is not empty
    if (this.credentials.username.trim() !== '') {
      this.checkingAvailability = true; // Set flag to indicate username check is in progress
      this.signupService.checkUsernameAvailability(this.credentials.username).subscribe({
        next: (available) => {
          this.usernameAvailable = available;
          this.checkingAvailability = false; // Reset the flag
        },
        error: (error) => {
          console.log(error);
          this.checkingAvailability = false; // Reset the flag in case of error
        }
      });
    }
  }
  register() {
    if (!this.credentials.username || !this.credentials.password || !this.customer.cname || !this.customer.csurname || !this.customer.cphone || !this.customer.cemail || !this.customer.caddress) {
      console.log('Please fill in all required fields.');
      return;
    }
    //adding new user to login table
    this.signupService.addNewUser(this.credentials).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error)
    })
    //adding new customer to customer table
    this.customer.username = this.credentials.username;
    this.signupService.addNewCustomer(this.customer).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    })
  }
}
