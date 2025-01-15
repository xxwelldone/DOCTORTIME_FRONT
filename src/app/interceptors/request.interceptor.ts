import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserToken } from '../store/auth.selectors';
import { switchMap, tap } from 'rxjs';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const store = inject(Store);

  if (req.url.includes('auth')) {
    return next(req);
  } else {
    return store.select(selectUserToken).pipe(
      switchMap((token) => {
        const newReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });

        return next(newReq);
      })
    );
  }
};
