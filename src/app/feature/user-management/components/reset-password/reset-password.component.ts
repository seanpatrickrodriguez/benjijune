import { Component, inject } from '@angular/core';
import { sendPasswordResetEmail } from '@angular/fire/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class ResetPasswordComponent {
  isLoading = false;
  form!: FormGroup;
  authService = inject(AuthService);

  constructor() {
    this.form = inject(FormBuilder).group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    this.resetPassword();
  }
  resetPassword() {
    sendPasswordResetEmail(this.authService.getAuth(), this.form.value.email)
  }

}
