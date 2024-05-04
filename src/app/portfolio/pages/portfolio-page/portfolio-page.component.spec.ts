import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import {
  FirebaseDevelopmentService,
  FirebaseService,
} from '../../../core/services/firebase/firebase.service';
import { PortfolioPageComponent } from './portfolio-page.component';

describe('PortfolioPageComponent', () => {
  let component: PortfolioPageComponent;
  let fixture: ComponentFixture<PortfolioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, TranslateModule.forRoot()],
      providers: [
        {
          provide: FirebaseService,
          useClass: FirebaseDevelopmentService,
        },
      ],
    });
    fixture = TestBed.createComponent(PortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
