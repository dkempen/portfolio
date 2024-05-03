import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { IpService } from './ip.service';

describe('IpService', () => {
  let service: IpService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(IpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
