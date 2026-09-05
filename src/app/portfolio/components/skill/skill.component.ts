import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { toString } from '../../../shared/models/localized-string';
import { Skill } from '../../../shared/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
  imports: [CommonModule, TranslatePipe],
})
export class SkillComponent {
  @Input() skill!: Skill;
  title!: string;
  description!: string;

  private translate = inject(TranslateService);

  constructor() {
    this.translate.onLangChange.subscribe(() => {
      const language = this.translate.currentLang()!;
      this.title = toString(this.skill.title, language);
      this.description = toString(this.skill.description, language);
    });
  }
}
