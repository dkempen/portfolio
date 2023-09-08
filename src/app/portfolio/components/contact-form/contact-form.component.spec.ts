import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import {
  FirebaseService,
  FirebaseDevelopmentService,
} from '../../../core/services/firebase/firebase.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [HttpClientModule, FormsModule, TranslateModule.forRoot()],
      providers: [
        {
          provide: FirebaseService,
          useClass: FirebaseDevelopmentService,
        },
      ],
    });
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
