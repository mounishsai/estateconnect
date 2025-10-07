import { TestBed } from '@angular/core/testing';

import { PropertyInqueryService } from './property-inquery.service';

describe('PropertyInqueryService', () => {
  let service: PropertyInqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyInqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
