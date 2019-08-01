import { TestBed } from '@angular/core/testing';

import { MobileBrandService } from './mobile-brand.service';

describe('MobileBrandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileBrandService = TestBed.get(MobileBrandService);
    expect(service).toBeTruthy();
  });
});
