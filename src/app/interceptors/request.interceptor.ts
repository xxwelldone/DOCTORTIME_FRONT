import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserToken } from '../store/auth.selectors';
import { switchMap, take, tap } from 'rxjs';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const store = inject(Store);

  if (req.url.includes('auth') || req.url.includes('viacep')) {
    return next(req);
  }
  return store.select(selectUserToken).pipe(
    take(1),
    switchMap((bearer) => {
      if (bearer) {
        const newReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${bearer}`,
          },
        });
        return next(newReq);
      } else {
        router.navigate(['auth/login']);
        return next(req);
      }
    })
  );
};
