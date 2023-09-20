import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPriceBlockComponent } from './categories-price-block.component';

describe('CategoriesPriceBlockComponent', () => {
  let component: CategoriesPriceBlockComponent;
  let fixture: ComponentFixture<CategoriesPriceBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesPriceBlockComponent]
    });
    fixture = TestBed.createComponent(CategoriesPriceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
