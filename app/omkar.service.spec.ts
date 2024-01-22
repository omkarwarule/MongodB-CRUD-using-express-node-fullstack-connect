import { TestBed } from '@angular/core/testing';

import { OmkarService } from './omkar.service';

describe('OmkarService', () => {
  let service: OmkarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmkarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
