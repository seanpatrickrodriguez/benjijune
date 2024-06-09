import { Component, DestroyRef, inject } from '@angular/core';
import { sendPasswordResetEmail } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, finalize, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { from } from 'rxjs/internal/observable/from';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../login/login.component.scss'],
})
export class ResetPasswordComponent {
  private authService = inject(AuthService);
  private destroyRef = inject(DestroyRef);
  private formBuilder = inject(FormBuilder);
  public form!: FormGroup;
  public isLoading = false;
  private subscription: Subscription | null = null;
  public passwordResetEmailSent = false;
  private firebaseErrorCode = '';

  constructor() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.form.get('email');
    this.sendPasswordResetEmail();
  }

  sendPasswordResetEmail(): void {
    this.form.disable();
    this.isLoading = true;

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.authService
      .sendPasswordResetEmail(this.form.value.email)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap({
          next: () => {
            this.passwordResetEmailSent = true;
            console.log('Password reset email sent');
          },
          error: (error) => {
            this.firebaseErrorCode = error.code;
            // Firebase throws an error before this point
            // console.error(error);
            throw error;
          },
        }),
        finalize(() => {
          this.form.enable();
          this.isLoading = false;
          if (this.firebaseErrorCode === 'auth/invalid-email') {
            this.form.get('email')?.setErrors({ invalidEmail: true });
          }
          console.log(this.form.get('email')?.errors);
        }),
      )
      .subscribe();
  }
}
