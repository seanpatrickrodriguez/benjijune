import { Component, signal } from '@angular/core';
import {
  EMPTY_NOTIFICATIONS_VALUE,
  Notifications,
  NotificationService,
} from '../../services/notification.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss',
})
export class SplashComponent {
  notifications = signal<Notifications>({ ...EMPTY_NOTIFICATIONS_VALUE });
  hasNotifications = signal<boolean>(false);
  anArray = [''];

  constructor(private notifyService: NotificationService) {
    this.notifyService.hasNotifications$.subscribe({
      next: (hasNotifications) => this.hasNotifications.set(hasNotifications),
      error: (error) => console.error(error.message),
    });
    this.notifyService.notifications$.subscribe({
      next: (notifications) => this.notifications.set(notifications),
      error: (error) => console.error(error.message),
    });
  }
}
