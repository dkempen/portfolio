import { TestBed } from '@angular/core/testing';

import { IpService } from './ip.service';
import { HttpClientModule } from '@angular/common/http';

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
