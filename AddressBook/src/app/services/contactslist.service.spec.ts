import { TestBed } from '@angular/core/testing';

import { ContactslistService } from './contactslist.service';

describe('ContactslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactslistService = TestBed.get(ContactslistService);
    expect(service).toBeTruthy();
  });
});
