import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousemenComponent } from './warehousemen.component';

describe('WarehousemenComponent', () => {
  let component: WarehousemenComponent;
  let fixture: ComponentFixture<WarehousemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousemenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
