import { TestBed } from '@angular/core/testing';

import { ServicesMovieServiceService } from './services-movie-service.service';

describe('ServicesMovieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesMovieServiceService = TestBed.get(ServicesMovieServiceService);
    expect(service).toBeTruthy();
  });
});
