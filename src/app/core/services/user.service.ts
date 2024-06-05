// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new BehaviorSubject<any>(null);

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, user => {
      this.user.next(user);
    });
  }



  getCurrentUser() {
    return this.user.value;
  }
}
