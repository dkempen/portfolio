import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {
  FirebaseDevelopmentService,
  FirebaseService,
} from '../../../core/services/firebase/firebase.service';
import { PortfolioModule } from '../../portfolio.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        RouterTestingModule,
        PortfolioModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        {
          provide: FirebaseService,
          useClass: FirebaseDevelopmentService,
        },
      ],
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
