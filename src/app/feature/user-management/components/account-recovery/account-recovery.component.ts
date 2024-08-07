import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrl: './account-recovery.component.scss',
})
export class AccountRecoveryComponent {
  forms: { [key: string]: FormGroup };
  selectedForm: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.forms = {
      email: this.fb.group({ email: [''] }),
      phone: this.fb.group({ phone: [''] }),
      person: this.fb.group({ first: [''], last: [''], birthdate: [''] }),
    };
  }
  selectForm(event: any) {
    if (!event.target.form?.id) return;
    this.selectedForm = event.target.form.id;
  }
  submitForm() {
    const form = this.forms[this.selectedForm];
    switch (this.selectedForm) {
      case 'email': {
        break;
      }
      case 'phone': {
        console.log(form.value)
        this.authService.signInWithPhoneNumber(form.value);
        break;
      }
      case 'person': {
        break;
      }
      default:
        break;
    }
  }
}
