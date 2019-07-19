import { TestBed } from '@angular/core/testing';

import { NewweatherService } from './newweather.service';

describe('NewweatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewweatherService = TestBed.get(NewweatherService);
    expect(service).toBeTruthy();
  });
});
