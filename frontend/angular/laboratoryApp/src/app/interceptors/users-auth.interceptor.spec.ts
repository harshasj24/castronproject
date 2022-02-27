import { TestBed } from '@angular/core/testing';

import { UsersAuthInterceptor } from './users-auth.interceptor';

describe('UsersAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UsersAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UsersAuthInterceptor = TestBed.inject(UsersAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
