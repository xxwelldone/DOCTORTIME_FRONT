import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize, tap } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadService = inject(LoadingService);
  loadService.show();

  return next(req).pipe(
    tap(() => {
      console.log('tap');
    }),
    finalize(() => {
      console.log('finalize');

      loadService.hide();
    })
  );
};
