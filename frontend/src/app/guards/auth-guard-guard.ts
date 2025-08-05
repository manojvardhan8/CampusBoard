import { ActivatedRouteSnapshot, CanActivateFn, Router,RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const protected_routes:string []=['/add'];
  const router= inject(Router);
  const isadmin=localStorage.getItem('role') === 'admin';
  console.log("Admin status:", isadmin);
  console.log("Current route:", state.url);
  if(protected_routes.includes(state.url) && !isadmin){
    return router.navigateByUrl('/login');

  }
  return true;
};
