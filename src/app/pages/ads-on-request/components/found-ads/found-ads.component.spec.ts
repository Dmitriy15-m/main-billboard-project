import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundAdsComponent } from './found-ads.component';

describe('FoundAdsComponent', () => {
  let component: FoundAdsComponent;
  let fixture: ComponentFixture<FoundAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoundAdsComponent]
    });
    fixture = TestBed.createComponent(FoundAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
