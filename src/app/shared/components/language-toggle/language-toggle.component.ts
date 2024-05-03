import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Languages } from 'src/app/shared/models/languages';
import { LanguageService } from '../../../core/services/language/language.service';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageToggleComponent {
  language$: Observable<Languages>;
  languages = Languages;

  constructor(private languageService: LanguageService) {
    this.language$ = languageService.language$;
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
