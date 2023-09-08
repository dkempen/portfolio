import { NgModule, Provider, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  FirebaseDevelopmentService,
  FirebaseService,
} from './core/services/firebase/firebase.service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let firebaseImports: any[] = [];
let firebaseProviders: Provider[] = [
  {
    provide: FirebaseService,
    useClass: FirebaseDevelopmentService,
  },
];
if (environment.production) {
  firebaseImports = [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
  ];
  firebaseProviders = [
    ScreenTrackingService,
    UserTrackingService,
    {
      provide: FirebaseService,
      useClass: FirebaseService,
    },
  ];
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...firebaseImports,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CoreModule,
    SharedModule,
    PortfolioModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [...firebaseProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
