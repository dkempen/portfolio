import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

export interface IFirebaseService {
  logEvent(name: string, data?: unknown): void;
}

@Injectable()
export class FirebaseService implements IFirebaseService {
  constructor(private analytics: AngularFireAnalytics) {}

  public logEvent(name: string, data?: unknown): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.analytics.logEvent(name, data as any);
  }
}

@Injectable()
export class FirebaseDevelopmentService implements IFirebaseService {
  public logEvent(name: string, data?: unknown): void {
    console.log('Firebase analytics:', name, data ?? '');
  }
}
