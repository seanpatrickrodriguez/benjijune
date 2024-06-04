import { NgModule } from '@angular/core';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    UserManagementComponent,
    LoginComponent,
  ],
  imports: [
    CoreModule,
    UserManagementRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    UserManagementComponent
  ]
})
export class UserManagementModule { }
