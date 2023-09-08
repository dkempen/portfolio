import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioModule } from '../../portfolio.module';
import { TranslateModule } from '@ngx-translate/core';
import {
  FirebaseService,
  FirebaseDevelopmentService,
} from '../../../core/services/firebase/firebase.service';

describe('PortfolioPageComponent', () => {
  let component: PortfolioPageComponent;
  let fixture: ComponentFixture<PortfolioPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioPageComponent],
      imports: [PortfolioModule, TranslateModule.forRoot()],
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
