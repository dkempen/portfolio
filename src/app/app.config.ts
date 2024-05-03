import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  EnvironmentProviders,
  enableProdMode,
  importProvidersFrom,
} from '@angular/core';
import {
  ScreenTrackingService,
  getAnalytics,
  provideAnalytics,
} from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { provideRouter } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import {
  FirebaseDevelopmentService,
  FirebaseService,
} from './core/services/firebase/firebase.service';

if (environment.production) {
  enableProdMode();
}

const firebaseProviders: EnvironmentProviders = importProvidersFrom([
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  providePerformance(() => getPerformance()),
  provideAnalytics(() => getAnalytics()),
  ScreenTrackingService,
]);

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const translateConfig: TranslateModuleConfig = {
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    firebaseProviders,
    {
      provide: FirebaseService,
      useClass: environment.production
        ? FirebaseService
        : FirebaseDevelopmentService,
    },
    importProvidersFrom([
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        registrationStrategy: 'registerWhenStable:30000',
      }),
      TranslateModule.forRoot(translateConfig),
    ]),
    provideHttpClient(),
    provideRouter(routes),
  ],
};
