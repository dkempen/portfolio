import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  light = 'portfolio-light-theme';
  dark = 'portfolio-dark-theme';
  theme = this.light;

  constructor(private overlayContainer: OverlayContainer, translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('nl');
  }

  ngOnInit(): void {
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
  }
}
