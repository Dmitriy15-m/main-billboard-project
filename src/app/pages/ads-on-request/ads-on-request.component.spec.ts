import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsOnRequestComponent } from './ads-on-request.component';

describe('AdsOnRequestComponent', () => {
  let component: AdsOnRequestComponent;
  let fixture: ComponentFixture<AdsOnRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsOnRequestComponent]
    });
    fixture = TestBed.createComponent(AdsOnRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
