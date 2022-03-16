import { TestBed } from '@angular/core/testing';

import { IsNotLoginGuard } from './is-not-login.guard';

describe('IsNotLoginGuard', () => {
  let guard: IsNotLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNotLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
