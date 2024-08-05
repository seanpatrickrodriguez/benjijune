import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { LoginComponent } from './components/login/login.component';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { RecoverEmailComponent } from './components/recover-email/recover-email.component';
import { SendPasswordResetEmailComponent } from './components/send-password-reset-email/send-password-reset-email.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'account-recovery',
    component: AccountRecoveryComponent,
    children: [
      { path: 'set-new-password', component: SetNewPasswordComponent },
      { path: 'send-password-reset-email', component: SendPasswordResetEmailComponent },
      { path: 'recover-email', component: RecoverEmailComponent },
    ]
  },
  { path: '', component: UserManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
