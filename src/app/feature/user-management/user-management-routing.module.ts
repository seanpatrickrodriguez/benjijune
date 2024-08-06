import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { RecoverEmailComponent } from './components/recover-email/recover-email.component';
import { SendPasswordResetEmailComponent } from './components/send-password-reset-email/send-password-reset-email.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { SplashComponent } from './components/splash/splash.component';

const routes: Routes = [
  { path: 'login', component: SplashComponent },
  { path: 'account-recovery', component: AccountRecoveryComponent },
  { path: 'set-new-password', component: SetNewPasswordComponent },
  {
    path: 'send-password-reset-email',
    component: SendPasswordResetEmailComponent,
  },
  { path: 'recover-email', component: RecoverEmailComponent },
  { path: '', component: SplashComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
