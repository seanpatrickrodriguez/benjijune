// src/app/feature/user-management/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
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
      this.userService.login(email, password)
        .then(() => {
          this.isLoading = false;
          // Handle successful login
        }
        );
    }
  }
}
