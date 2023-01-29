import { TestBed } from '@angular/core/testing';

import { SearchAvengerServiceService } from './search-avenger-service.service';

describe('SearchAvengerServiceService', () => {
  let service: SearchAvengerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAvengerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
