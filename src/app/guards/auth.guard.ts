import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserState, selectUserToken } from '../store/auth.selectors';
import { of, switchMap, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  return store.select(selectUserToken).pipe(
    take(1),
    switchMap((token) => {
      const allowed = token ? true : false;
      if (allowed) {
        return of(true);
      } else {
        router.navigate(['auth/login']);
        return of(false);
      }
    })
  );
};
