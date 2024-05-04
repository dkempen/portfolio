import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DividerComponent } from '../../../shared/components/divider/divider.component';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    ThemeToggleComponent,
    LanguageToggleComponent,
    DividerComponent,
  ],
  standalone: true,
})
export class HeaderComponent {
  public goTo(location: string): void {
    const height = document
      .getElementById(location)
      ?.getBoundingClientRect().top;
    if (height) window.scrollTo({ top: height - 50 });
  }
}
