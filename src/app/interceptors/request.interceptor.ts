import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('token');
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
      if (err instanceof HttpErrorResponse) {
        if (
          err.status === HttpStatusCode.Unauthorized ||
          err.status === HttpStatusCode.Forbidden
        ) {
          router.navigate(['/auth/login']);
        }
        if (err.status === HttpStatusCode.InternalServerError) {
          console.log('Erro no servidor');
        }
        if (err.status === HttpStatusCode.NotFound) {
          console.log('Url não encontrada');
        }
      }
      return throwError(() => err);
    })
  );
};
