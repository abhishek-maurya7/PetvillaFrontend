import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  isSignupPage(): boolean {
    return this.router.url === '/signup';
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }  

  logOut(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    this.router.navigate(['login']);
  }
}
