import { TestBed } from '@angular/core/testing';

import { ISAdminGuard } from './isadmin.guard';

describe('ISAdminGuard', () => {
  let guard: ISAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ISAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
