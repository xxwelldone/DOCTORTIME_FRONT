import { TestBed } from '@angular/core/testing';

import { NormalizeKeysService } from './normalize-keys.service';

describe('NormalizeKeysService', () => {
  let service: NormalizeKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalizeKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
