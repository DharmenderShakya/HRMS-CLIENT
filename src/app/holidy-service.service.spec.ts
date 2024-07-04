import { TestBed } from '@angular/core/testing';

import { HolidyServiceService } from './holidy-service.service';

describe('HolidyServiceService', () => {
  let service: HolidyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
