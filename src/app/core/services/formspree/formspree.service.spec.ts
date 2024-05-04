import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormspreeService } from './formspree.service';

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
