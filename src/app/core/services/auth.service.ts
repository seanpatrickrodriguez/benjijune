// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from } from 'rxjs';
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private auth: Auth,
  ) {
    this.authStateGuard();
  }

  signIn(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password).then(() => {
      this.router.navigate(['/home']);
    });
  }

  logOut(): Observable<void> {
    return from(signOut(this.auth));
  }

  register(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  sendPasswordResetEmail(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this.auth, email));
  }

  authStateGuard(): void {
    onAuthStateChanged(this.auth, (user) => {
      this.authState.next(!!user);
      if (!user) this.router.navigate(['/user-management']);
    });
  }

  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  getAuth(): Auth {
    return this.auth;
  }
}
