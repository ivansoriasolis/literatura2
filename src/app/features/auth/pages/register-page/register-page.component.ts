import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/core/interfaces/login-data.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(
    private readonly authService: AuthService,
    private readonly rotuer: Router,
  ) { }

  register(data: LoginData) {
    this.authService.register(data)
      .then(() => this.rotuer.navigate(['/login']))
      .catch((e) => console.log(e.message))
  }
}
