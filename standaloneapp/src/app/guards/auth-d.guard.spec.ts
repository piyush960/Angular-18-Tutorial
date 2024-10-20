import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { authDGuard } from './auth-d.guard';

describe('authDGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authDGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
