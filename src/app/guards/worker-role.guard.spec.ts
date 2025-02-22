import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { workerRoleGuard } from './worker-role.guard';

describe('workerRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => workerRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
