import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  logIn: boolean = true;

  login() {
    this.logIn = true;
  }

  logOut() {
    this.logIn = false;
  }
}
