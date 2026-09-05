import { TestBed, inject } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
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
