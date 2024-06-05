// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  console.log('Checking auth')
  if (!authService.isAuthenticated()) {
    console.log(`'AuthGuard isAuthenticated ${authService.isAuthenticated()}`)
    router.navigate(['/user-management']);
    return false;
  }
  return true;
}
