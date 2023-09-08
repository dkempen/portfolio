import { TestBed, inject } from '@angular/core/testing';
import {
  FirebaseDevelopmentService,
  FirebaseService,
} from './firebase.service';

describe('Service: Firebase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: FirebaseService, useClass: FirebaseDevelopmentService },
      ],
    });
  });

  it('should ...', inject([FirebaseService], (service: FirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
