import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { SkillComponent } from './skill.component';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
