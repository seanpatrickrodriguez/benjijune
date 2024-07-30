import { Component, inject } from '@angular/core';
import { sendEmailVerification } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss',
})
export class VerifyEmailComponent {
  private authService = inject(AuthService);

  constructor() {}

  sendEmailVerification() {
    const user = this.authService.getCurrentUser();
    if (user) {
      sendEmailVerification(user);
    }
  }
}
