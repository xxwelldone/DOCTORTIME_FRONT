import { TestBed } from '@angular/core/testing';

import { RoleNotifierService } from './role-notifier.service';

describe('RoleNotifierService', () => {
  let service: RoleNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
