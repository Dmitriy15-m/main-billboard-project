import { TestBed } from '@angular/core/testing';

import { ItemsCardService } from './items-card.service';

describe('ItemsCardService', () => {
  let service: ItemsCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
