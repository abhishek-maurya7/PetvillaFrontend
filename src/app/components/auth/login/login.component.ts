import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from '../../../service/auth/login.service';
import { Router } from '@angular/router';
import { Login } from '../../../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService, private route: Router) { }
  message!: string;
  credentials = new Login('', '');

  login() {
    if (!this.credentials.username || !this.credentials.password) {
      this.message = "Please enter the credentials!";
      return;
    }
    this.loginService.login(this.credentials).subscribe({
      next: (response) => {
        sessionStorage.setItem('token', response);
        sessionStorage.setItem('username', this.credentials.username)
        this.route.navigate(["/store"]);
        alert("Login successful.")
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.message = "Invalid username or password";
          // alert("Invalid username or password");
        } else {
          this.message = "An error occurred while logging in. Please try again later.";
          // alert("An error occurred while logging in. Please try again later.");
        }
      }
    });
  }

  adminLogin() {
    this.route.navigate(['/admin/store']);
  }
}
