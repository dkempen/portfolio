import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { Observable, firstValueFrom } from 'rxjs';
import { Themes } from '../../models/themes';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  theme$: Observable<Themes>;
  themes = Themes;

  constructor(private themeService: ThemeService) {
    this.theme$ = themeService.theme$;
  }

  async onClick() {
    let theme = await firstValueFrom(this.theme$);
    switch (theme) {
      case Themes.Auto:
        theme = Themes.Dark;
        break;
      case Themes.Dark:
        theme = Themes.Light;
        break;
      case Themes.Light:
        theme = Themes.Auto;
        break;
    }

    this.themeService.setTheme(theme);
  }
}
