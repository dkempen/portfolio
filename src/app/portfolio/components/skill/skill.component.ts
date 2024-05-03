import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { toString } from '../../../shared/models/localized-string';
import { Skill } from '../../../shared/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  @Input() skill!: Skill;
  title!: string;
  description!: string;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      const language = this.translate.currentLang;
      this.title = toString(this.skill.title, language);
      this.description = toString(this.skill.description, language);
    });
  }
}
