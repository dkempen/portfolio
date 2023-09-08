import { TestBed } from '@angular/core/testing';

import { FormspreeService } from './formspree.service';
import { HttpClientModule } from '@angular/common/http';

describe('FormspreeService', () => {
  let service: FormspreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(FormspreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
