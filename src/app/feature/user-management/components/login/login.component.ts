// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/feature/user-management/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotificationService,
  ) {}

  onLogin(credentials: { username: string; password: string }) {
    this.notifyService.clear('all');

    this.authService
      .login(credentials.username, credentials.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
          this.notifyService.clear('all'); // Clear error message on success
        },
        error: (error) => this.notifyService.add('error', error.message),
        complete: () => console.log('Login process completed.'),
      });
  }
}
