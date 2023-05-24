/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthentionService } from './authention.service';

describe('Service: Authention', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentionService]
    });
  });

  it('should ...', inject([AuthentionService], (service: AuthentionService) => {
    expect(service).toBeTruthy();
  }));
});
