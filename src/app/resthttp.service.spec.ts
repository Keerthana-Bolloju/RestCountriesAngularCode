import { TestBed, inject } from '@angular/core/testing';

import { ResthttpService } from './resthttp.service';

describe('ResthttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResthttpService]
    });
  });

  it('should be created', inject([ResthttpService], (service: ResthttpService) => {
    expect(service).toBeTruthy();
  }));
});
