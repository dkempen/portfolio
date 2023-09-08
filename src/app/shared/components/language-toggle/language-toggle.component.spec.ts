import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageToggleComponent } from './language-toggle.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('LanguageToggleComponent', () => {
  let component: LanguageToggleComponent;
  let fixture: ComponentFixture<LanguageToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageToggleComponent],
      imports: [TranslateModule.forRoot(), HttpClientModule, NgbModule],
    });
    fixture = TestBed.createComponent(LanguageToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
