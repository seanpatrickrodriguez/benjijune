// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, from, of, tap } from 'rxjs';
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
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

  signIn(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap(() => this.router.navigate(['/home'])),
      catchError((error) => {
        console.error('Sign-in error:', error);
        return of(); // Handle error appropriately
      }),
    );
  }

  logOut(): Observable<void> {
    return from(signOut(this.auth));
  }

  register(email: string, password: string): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password),
    ).pipe(
      catchError((error) => {
        console.error('Registration error:', error);
        throw error; // Re-throw or handle the error appropriately
      }),
    );
  }

  sendPasswordResetEmail(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this.auth, email)).pipe(
      catchError((error) => {
        console.error('Password reset error:', error);
        return of(); // Handle error appropriately
      }),
    );
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
