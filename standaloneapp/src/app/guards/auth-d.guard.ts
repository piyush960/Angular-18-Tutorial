import { CanDeactivateFn } from '@angular/router';

export const authDGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  return component.canNavigate();
};
