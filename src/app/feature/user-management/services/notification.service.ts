import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

type NotificationTypes = 'alert' | 'error';

export interface Notifications {
  type: { [K in NotificationTypes]: string[] };
}

export const EMPTY_NOTIFICATIONS_VALUE: Notifications = {
  type: {
    alert: [],
    error: [],
  },
};

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _hasNotifications$ = new BehaviorSubject<boolean>(false);
  public hasNotifications$ = this._hasNotifications$.asObservable();
  private _notifications$ = new BehaviorSubject<Notifications>(
    EMPTY_NOTIFICATIONS_VALUE,
  );
  public notifications$ = this._notifications$.asObservable();

  add(type: NotificationTypes, notification: string): void {
    if (!notification) return;
    const notifications = this._notifications$.getValue();

    const newNotifications = {
      ...notifications,
      type: {
        ...(notifications ? notifications.type : { alert: [], error: [] }),
        [type]: [
          ...(notifications ? notifications.type[type] : []),
          notification,
        ],
      },
    };
    this._notifications$.next(newNotifications);
    this._hasNotifications$.next(true);
  }

  clear(type: NotificationTypes | 'all'): void {
    const notifications = this._notifications$.getValue();
    let newNotifications: Notifications;
    if (type === 'all') {
      newNotifications = { ...EMPTY_NOTIFICATIONS_VALUE };
      this._hasNotifications$.next(false);
    } else {
      newNotifications = {
        ...notifications,
        type: {
          ...(notifications ? notifications.type : { alert: [], error: [] }),
          [type]: [],
        },
      };
    }
    this._notifications$.next(newNotifications);
  }

  getByType(type: NotificationTypes): Observable<string[]> {
    return this.notifications$.pipe(
      map((notifications) => (notifications ? notifications.type[type] : [])),
    );
  }
}
