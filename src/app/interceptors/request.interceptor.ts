import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('token');
  console.log(token);

  return next(req);
};
