import { TestBed, inject } from '@angular/core/testing';

import { SourceDataService } from './source-data.service';

describe('SourceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceDataService]
    });
  });

  it('should be created', inject([SourceDataService], (service: SourceDataService) => {
    expect(service).toBeTruthy();
  }));
});
