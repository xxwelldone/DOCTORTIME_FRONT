import { TestBed } from '@angular/core/testing';

import { AppointmentEndService } from './appointment-endpoint.service';

describe('AppointmentEndService', () => {
  let service: AppointmentEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
