import { TestBed } from '@angular/core/testing';

import { ProdFiltService } from './prod-filt.service';

describe('ProdFiltService', () => {
  let service: ProdFiltService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdFiltService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
