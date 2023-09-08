import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponent } from './skill.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillComponent],
      imports: [TranslateModule.forRoot()],
    });
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    (component.skill = {
      icon: 'icon',
      title: {
        en: 'title',
        nl: 'titel',
      },
      description: {
        en: 'description',
        nl: 'beschrijving',
      },
      languages: ['language'],
      tools: ['tool'],
    }),
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
