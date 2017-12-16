import { TestBed, inject } from '@angular/core/testing';

import { DealServiceService } from './deal-service.service';

describe('DealServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealServiceService]
    });
  });

  it('should be created', inject([DealServiceService], (service: DealServiceService) => {
    expect(service).toBeTruthy();
  }));
});
