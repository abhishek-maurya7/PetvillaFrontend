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
  credentials = new Login('', '');
  login() {
    this.loginService.login(this.credentials).subscribe({
      next: (response) => {
        console.log(response);
        sessionStorage.setItem('token', response);
        sessionStorage.setItem('username', this.credentials.username)
        this.route.navigate(["/store"]);
      },
      error: (error) => alert(error.toString())
    })
  }

  adminLogin(){
    this.route.navigate(['/admin/pets']);
  }
}
