import { TestBed, inject } from '@angular/core/testing';

import { CompadderService } from './compadder.service';

describe('CompadderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompadderService]
    });
  });

  it('should be created', inject([CompadderService], (service: CompadderService) => {
    expect(service).toBeTruthy();
  }));
});
