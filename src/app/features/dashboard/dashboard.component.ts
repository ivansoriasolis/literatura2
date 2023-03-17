import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.menssage));
  }

}
