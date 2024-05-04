import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageToggleComponent } from './language-toggle.component';

describe('LanguageToggleComponent', () => {
  let component: LanguageToggleComponent;
  let fixture: ComponentFixture<LanguageToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientModule, NgbTooltip],
    });
    fixture = TestBed.createComponent(LanguageToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
