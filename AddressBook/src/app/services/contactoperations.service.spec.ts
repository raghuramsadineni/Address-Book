import { TestBed } from '@angular/core/testing';

import { ContactoperationsService } from './contactoperations.service';

describe('ContactoperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactoperationsService = TestBed.get(ContactoperationsService);
    expect(service).toBeTruthy();
  });
});
