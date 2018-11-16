import { TestBed } from '@angular/core/testing';

import { ContactsStorageService } from './contacts-storage.service';

describe('ContactsStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsStorageService = TestBed.get(ContactsStorageService);
    expect(service).toBeTruthy();
  });
});
