// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private auth: Auth) {
    auth.onAuthStateChanged(user => {
      this.authState.next(!!user);
      console.log('AuthService onAuthStateChanged', user);
    });
  }

  login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.authState.next(true);
        this.router.navigate(['/home']);
      });
  }

  logout(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.authState.next(false);
      this.router.navigate(['/login']);
    });
  }

  isAuthenticated(): boolean {
    return this.authState.value;
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
