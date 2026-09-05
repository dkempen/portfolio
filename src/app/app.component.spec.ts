import { TestBed } from '@angular/core/testing';
import { Analytics } from '@angular/fire/analytics';
import { Performance } from '@angular/fire/performance';
import { RouterModule } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { AppComponent } from './app.component';
import { FirebaseService } from './core/services/firebase/firebase.service';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [
        FirebaseService,
        { provide: Performance, useValue: {} },
        { provide: Analytics, useValue: {} },
        provideTranslateService(),
      ],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
