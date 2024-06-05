import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  constructor(private authService: AuthService) { }

  login() {
    this.authService.login('newuser@example.com', '@Abc1234');
  }

  logout() {
    this.authService.logout();
  }

  signUp() {
    this.authService.signUp('newuser@example.com', '@Abc1234');
  }
}
