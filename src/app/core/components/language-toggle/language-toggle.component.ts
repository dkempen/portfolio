import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Languages } from 'src/app/shared/models/languages';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, NgbTooltip],
  standalone: true,
})
export class LanguageToggleComponent {
  language$: Observable<Languages>;
  languages = Languages;

  private languageService = inject(LanguageService);

  constructor() {
    this.language$ = this.languageService.language$;
  }

  public async onClick(): Promise<void> {
    let language = await firstValueFrom(this.language$);
    switch (language) {
      case Languages.English:
        language = Languages.Dutch;
        break;
      case Languages.Dutch:
        language = Languages.English;
        break;
    }
    this.languageService.setLanguage(language);
  }
}
