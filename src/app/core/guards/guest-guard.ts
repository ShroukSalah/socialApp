import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const userToken = localStorage.getItem('userToken')
  if (!userToken) {
    return true;

  }
  else {
    
    return router.parseUrl('/feed')
  }
};
