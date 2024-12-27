import { TestBed } from '@angular/core/testing';

import { DoctorEndpointService } from './doctor-endpoint.service';

describe('DoctorEndpointService', () => {
  let service: DoctorEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
