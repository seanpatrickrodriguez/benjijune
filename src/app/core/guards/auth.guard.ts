// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, from, map, of, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  console.log('Auth Guard');

  return from(authService.getAuthState()).pipe(
    tap(authState => {
      if (!authState) {
        router.navigate(['/user']);
      }
    }),
    map(authState => authState), // Allow access if the user is authenticated
    catchError(error => {
      console.error('Error checking authentication state', error);
      return of(false); // In case of an error, deny access
    })
  );
};