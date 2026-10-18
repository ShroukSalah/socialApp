import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('userToken')

  if (token) {
    if (req.url.includes('posts') || req.url.includes('comments')) {
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
    }
  }

  return next(req);
};
