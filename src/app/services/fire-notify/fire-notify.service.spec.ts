import { TestBed } from '@angular/core/testing';

import { FireNotifyService } from './fire-notify.service';

describe('FireNotifyService', () => {
  let service: FireNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
