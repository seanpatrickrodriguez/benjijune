// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private auth: Auth) {
    onAuthStateChanged(this.auth, user => {
      this.authState.next(!!user);
    });
    this.authState.subscribe((authState) => {
      if (authState) {
      } else {
        this.router.navigate(['/user-management']);
      }
    });
  }

  login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.router.navigate(['/home']);
      });
  }

  logout(): Promise<void> {
    return signOut(this.auth).then(() => { });
  }

  signUp(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password).then(() => { });
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
