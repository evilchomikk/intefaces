import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'], // Use styleUrls instead of styleUrl
})
export class LoginComponentComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {} // Constructor should be closed here

  login() {


    switch (this.username + '|' + this.password) {
      case 'admin|admin':
        this.pass();
        break;
      case 'hubert.kulka01@gmail.com|asd':
        this.pass();
        break;
      default:
        alert('Invalid credentials');
    }
  }
  pass() {
    this.router.navigate(['home']);
  }
}
