// src/app/feature/user-management/login/login.component.ts
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { catchError, of, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ERRORS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  ERRORS = ERRORS;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['newuser@example.com', [Validators.required, Validators.email]],
      password: ['@Abc1234', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;
      this.authService
        .signIn(email, password)
        .pipe(
          tap(() => {
            this.isLoading = false;
            // Handle successful login
          }),
          catchError((error) => {
            this.isLoading = false;
            this.setFormErrors(error);
            return of(null); // Handle the error appropriately
          }),
        )
        .subscribe();
    }
  }

  getFormErrors(): string[] {
    const errors: string[] = [];
    Object.keys(this.loginForm.controls).forEach((key) => {
      const control = this.loginForm.get(key);
      if (!control) return;
      const controlErrors: ValidationErrors | null = errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach((keyError) => {
          errors.push(controlErrors[keyError]);
        });
      }
    });
    const formErrors = this.loginForm.errors;
    if (formErrors) {
      Object.keys(formErrors).forEach((keyError) => {
        errors.push(formErrors[keyError]);
      });
    }
    return errors;
  }

  setFormErrors(error: any) {
    this.loginForm.setErrors({
      serverError: ERRORS[error.code],
    });
  }
}
