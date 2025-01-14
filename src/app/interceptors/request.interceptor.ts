import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  let token = null;
  if (typeof sessionStorage !== 'undefined') {
    token = sessionStorage.getItem('token');
  }
  const router = inject(Router);
  if (req.url.includes('auth')) {
    return next(req);
  }
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(newReq).pipe(
    catchError((err) => {
      router.navigate(['auth/login']);
      return throwError(() => err);
    })
  );
};
