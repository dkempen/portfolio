import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DividerComponent } from '../../../shared/components/divider/divider.component';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    TranslatePipe,
    ThemeToggleComponent,
    LanguageToggleComponent,
    DividerComponent,
  ],
})
export class HeaderComponent {
  public goTo(location: string): void {
    const height = document
      .getElementById(location)
      ?.getBoundingClientRect().top;
    if (height) window.scrollTo({ top: height - 50 });
  }
}
