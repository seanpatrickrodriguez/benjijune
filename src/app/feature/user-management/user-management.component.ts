import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  constructor(private userService: UserService) { }

  login() {
    this.userService.login('newuser@example.com', '@Abc1234');
  }

  logout() {
    this.userService.logout();
  }

  signUp() {
    this.userService.signUp('newuser@example.com', '@Abc1234');
  }
}
