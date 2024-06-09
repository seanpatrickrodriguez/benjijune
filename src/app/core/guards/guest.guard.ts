import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { from, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  console.log('Guest Guard');

  return from(authService.getAuthState()).pipe(
    tap(authState => {
      if (authState) {
        router.navigate(['/home']);
      }
    }),
    map(authState => !authState), // Allow access if the user is not authenticated
    catchError(error => {
      console.error('Error checking authentication state', error);
      return of(false); // In case of an error, deny access
    })
  );
};
