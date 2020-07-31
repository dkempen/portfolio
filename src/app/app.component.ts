import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from './shared/services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private readonly light = 'portfolio-light-theme';
  private readonly dark = 'portfolio-dark-theme';
  theme = this.dark;

  constructor(private overlayContainer: OverlayContainer, translate: TranslateService, private cookieService: CookieService) {
    translate.setDefaultLang('en');
    translate.use(cookieService.getLanguage());
    if (!cookieService.getNightMode()) {
      this.theme = this.light;
    }
  }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  setTheme(dark: boolean) {
    if (dark) {
      this.theme = this.dark;
    } else {
      this.theme = this.light;
    }

    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme);

    this.cookieService.setNightMode(dark);
  }
}
