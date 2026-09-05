import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { SkillComponent } from './skill.component';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideTranslateService()],
    });
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ((component.skill = {
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
      fixture.detectChanges());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
