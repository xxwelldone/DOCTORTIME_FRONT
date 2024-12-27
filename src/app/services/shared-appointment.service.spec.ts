import { TestBed } from '@angular/core/testing';

import { SharedAppointmentService } from './shared-appointment.service';

describe('SharedAppointmentService', () => {
  let service: SharedAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
