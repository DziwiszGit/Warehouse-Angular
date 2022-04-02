import { TestBed } from '@angular/core/testing';

import { WarehousemanService } from './warehouseman.service';

describe('WarehousemanService', () => {
  let service: WarehousemanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousemanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
