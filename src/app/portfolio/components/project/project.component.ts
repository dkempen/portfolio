import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Project } from 'src/app/shared/models/project';
import { toLanguage } from 'src/app/shared/models/lang-string';
import { toLanguageArray } from 'src/app/shared/models/lang-string-array';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  title: string;
  subtitle: string;
  description: string;
  features: string[];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      const language = this.translate.currentLang;
      this.title = toLanguage(this.project.title, language);
      this.subtitle = toLanguage(this.project.subtitle, language);
      this.description = toLanguage(this.project.description, language);
      this.features = toLanguageArray(this.project.features, language);
    });
  }
}
