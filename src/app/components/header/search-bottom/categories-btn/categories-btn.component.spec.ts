import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBtnComponent } from './categories-btn.component';

describe('CategoriesBtnComponent', () => {
  let component: CategoriesBtnComponent;
  let fixture: ComponentFixture<CategoriesBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesBtnComponent]
    });
    fixture = TestBed.createComponent(CategoriesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
