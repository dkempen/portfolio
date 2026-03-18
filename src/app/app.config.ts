import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  enableProdMode,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
} from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import {
  FirebaseDevelopmentService,
  FirebaseService,
} from './core/services/firebase/firebase.service';

if (environment.production) {
  enableProdMode();
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: FirebaseService,
      useClass: environment.production
        ? FirebaseService
        : FirebaseDevelopmentService,
    },
    provideHttpClient(),
    provideRouter(routes),
    provideZoneChangeDetection(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    providePerformance(() => getPerformance()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    provideTranslateService({ fallbackLang: 'en' }),
    provideTranslateHttpLoader(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: false,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
