import { NgModule } from '@angular/core';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { RecoverEmailComponent } from './components/recover-email/recover-email.component';
import { SendPasswordResetEmailComponent } from './components/send-password-reset-email/send-password-reset-email.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

@NgModule({
  declarations: [
    UserManagementComponent,
    LoginComponent,
    VerifyEmailComponent,
    AccountRecoveryComponent,
    RecoverEmailComponent,
    SendPasswordResetEmailComponent,
    SetNewPasswordComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    UserManagementRoutingModule,
  ],

})
export class UserManagementModule { }
