import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCategoryTitleComponent } from './selected-category-title.component';

describe('SelectedCategoryTitleComponent', () => {
  let component: SelectedCategoryTitleComponent;
  let fixture: ComponentFixture<SelectedCategoryTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCategoryTitleComponent]
    });
    fixture = TestBed.createComponent(SelectedCategoryTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
