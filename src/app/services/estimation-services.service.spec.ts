import { TestBed } from '@angular/core/testing';

import { EstimationServicesService } from './estimation-services.service';

describe('EstimationServicesService', () => {
  let service: EstimationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
