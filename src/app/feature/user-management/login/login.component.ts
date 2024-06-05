// src/app/feature/user-management/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['newuser@example.com', [Validators.required, Validators.email]],
      password: ['@Abc1234', [Validators.required, Validators.minLength(6)]]
    });
  }

  getCurrentUser() {
    return this.userService.getCurrentUser();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password)
        .then(() => {
          this.isLoading = false;
          // Handle successful login
        }
        );
    }
  }
}
