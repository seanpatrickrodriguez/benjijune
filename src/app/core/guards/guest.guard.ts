import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  console.log('Checking guest')
  console.log(`'GuestGuard isAuthenticated ${authService.isAuthenticated()}`)
  if (authService.isAuthenticated()) {
    router.navigate(['/home']);
    return false;
  }
  return true
};
