/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

export interface IFirebaseService {
  logEvent(name: string, data?: any): void;
}

@Injectable()
export class FirebaseService implements IFirebaseService {
  constructor(private analytics: AngularFireAnalytics) {}

  logEvent(name: string, data?: any) {
    this.analytics.logEvent(name, data);
  }
}

@Injectable()
export class FirebaseDevelopmentService implements IFirebaseService {
  constructor() {}

  logEvent(name: string, data?: any) {
    console.log('Firebase analytics:', name, data ?? '');
  }
}
