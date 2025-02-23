import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadService = inject(LoadingService);
  loadService.show();
  return next(req).pipe(
    finalize(() => {
      loadService.hide();
    })
  );
};
