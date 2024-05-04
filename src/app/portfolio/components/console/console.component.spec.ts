import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ConsoleComponent } from './console.component';

describe('ConsoleComponent', () => {
  let component: ConsoleComponent;
  let fixture: ComponentFixture<ConsoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientModule],
    });
    fixture = TestBed.createComponent(ConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
