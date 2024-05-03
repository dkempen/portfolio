import { Injectable, inject } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { Performance } from '@angular/fire/performance';
import { IFirebaseService, LogEvent } from '../../models/firebase-service';

@Injectable()
export class FirebaseService implements IFirebaseService {
  protected performance = inject(Performance);
  protected analytics = inject(Analytics);

  public logEvent(event: LogEvent, data?: object): void {
    logEvent(this.analytics, event, data);
  }
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseDevelopmentService implements IFirebaseService {
  public logEvent(event: LogEvent, data?: object): void {
    console.log('Firebase analytics:', event, data);
  }
}
