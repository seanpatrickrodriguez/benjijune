import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ERRORS } from 'src/app/shared/constants';

@Component({
  selector: 'app-recover-email',
  templateUrl: './recover-email.component.html',
  styleUrl: './recover-email.component.scss',
})
export class RecoverEmailComponent {
  @Output() login = new EventEmitter<{ username: string; password: string }>();
  form: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // newuser@example.comp
      // @Abc1234
      username: ['', Validators.required],
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    if (this.form.valid) {
      this.login.emit(this.form.value);
    }
  }
}
