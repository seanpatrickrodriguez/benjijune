// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage = signal<string | null>(null);

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin(credentials: { username: string; password: string }) {
    this.authService
      .login(credentials.username, credentials.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
          this.errorMessage.set(null); // Clear error message on success
        },
        error: (err) => this.errorMessage.set(err.message),
        complete: () => console.log('Login process completed.'),
      });
  }
}
