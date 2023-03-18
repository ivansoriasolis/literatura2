import { TestBed } from '@angular/core/testing';

import { TextosFirestoreService } from './textos-firestore.service';

describe('LitedexFirestoreService', () => {
  let service: TextosFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextosFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
