import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ERRORS } from 'src/app/shared/constants';

@Component({
  selector: 'app-recover-email',
  templateUrl: './recover-email.component.html',
  styleUrl: './recover-email.component.scss',
})
export class RecoverEmailComponent {
  isLoading = false;
  form: FormGroup;
  ERRORS = ERRORS;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      email: ['newuser@example.com', [Validators.required, Validators.email]],
      password: ['@Abc1234', [Validators.required]],
    });
  }

  onSubmit() {}
}
