import { CanActivateChildFn } from '@angular/router';

export const childGuard: CanActivateChildFn = (childRoute, state) => {
  
  alert(`no access`)
  return false;
};
