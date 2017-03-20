import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string

  constructor(private AuthService: AuthService) {
    this.message = ''
  }

  login(username: string, password: string): boolean {
    this.message = ''

    if (!this.AuthService.login(username, password)) {
      this.message = 'Incorrect credentials'

      setTimeout(() => {
        this.message = ''
      }, 2500)
    }

    return false
  }

  logout(): boolean {
    this.AuthService.logout()
    return false
  }



}
