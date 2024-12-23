import { TestBed } from '@angular/core/testing';

import { WorkerEndpointService } from './worker-endpoint.service';

describe('WorkerEndpointService', () => {
  let service: WorkerEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
