import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'account-recovery',
    component: AccountRecoveryComponent,
    children: [
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'recover-email', component: ResetPasswordComponent },
    ]
  },
  { path: '', component: UserManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
