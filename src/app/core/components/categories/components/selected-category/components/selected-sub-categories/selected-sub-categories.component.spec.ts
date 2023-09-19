import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSubCategoriesComponent } from './selected-sub-categories.component';

describe('SelectedSubCategoriesComponent', () => {
  let component: SelectedSubCategoriesComponent;
  let fixture: ComponentFixture<SelectedSubCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedSubCategoriesComponent]
    });
    fixture = TestBed.createComponent(SelectedSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
