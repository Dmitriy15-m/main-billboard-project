import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardPageComponent } from './item-card-page.component';

describe('ItemCardPageComponent', () => {
  let component: ItemCardPageComponent;
  let fixture: ComponentFixture<ItemCardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCardPageComponent]
    });
    fixture = TestBed.createComponent(ItemCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
