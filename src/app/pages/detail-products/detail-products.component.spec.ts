import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductsComponent } from './detail-products.component';

describe('DetailProductsComponent', () => {
  let component: DetailProductsComponent;
  let fixture: ComponentFixture<DetailProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailProductsComponent]
    });
    fixture = TestBed.createComponent(DetailProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
