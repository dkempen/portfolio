import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Themes } from '../../../shared/models/themes';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, NgbTooltip],
  standalone: true,
})
export class ThemeToggleComponent {
  theme$: Observable<Themes>;
  themes = Themes;

  private themeService = inject(ThemeService);

  constructor() {
    this.theme$ = this.themeService.theme$;
  }

  public async onClick(): Promise<void> {
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
