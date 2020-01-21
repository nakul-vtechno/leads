import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCountTableComponent } from './product-count-table.component';

describe('ProductCountTableComponent', () => {
  let component: ProductCountTableComponent;
  let fixture: ComponentFixture<ProductCountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCountTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
