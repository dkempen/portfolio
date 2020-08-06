import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Skill } from 'src/app/shared/models/skill';
import { toLanguage } from 'src/app/shared/models/lang-string';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill;
  title: string;
  description: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      const language = this.translate.currentLang;
      this.title = toLanguage(this.skill.title, language);
      this.description = toLanguage(this.skill.description, language);
    });
  }
}
