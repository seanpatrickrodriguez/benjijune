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

  constructor(private router: Router,
    private auth: Auth,
  ) {
    console.log('AuthService constructed')

    auth.onAuthStateChanged(user => {
      console.log(`AuthService onAuthStateChanged ${user}`)
      if (user) {
        this.authState.next(true);
      } else {
        this.router.navigate(['/user-management']);
        this.authState.next(false);
      }
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
    return signOut(this.auth).then(() => { });
  }

  isAuthenticated(): boolean {
    return this.authState.value;
  }

  getAuthState() {
    return this.authState.asObservable();
  }
}
