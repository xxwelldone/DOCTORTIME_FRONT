import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectRole } from '../store/auth.selectors';
import { of, switchMap, take } from 'rxjs';

export const UserRoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  return store.select(selectRole).pipe(
    take(1),
    switchMap((role) => {
      const userRole = role?.includes('[ROLE_USER]') ? true : false;
      console.log(role);

      if (userRole) {
        return of(true);
      } else {
        router.navigate(['/home']);
        return of(false);
      }
    })
  );
};
