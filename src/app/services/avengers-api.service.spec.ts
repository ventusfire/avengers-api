import { TestBed } from '@angular/core/testing';

import { AvengersAPIService } from './avengers-api.service';

describe('AvengersAPIService', () => {
  let service: AvengersAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvengersAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
