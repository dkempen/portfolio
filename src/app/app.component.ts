import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { interval, Subscription } from 'rxjs';
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
  subscription: Subscription;

  constructor(private overlayContainer: OverlayContainer, translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
    // this.setThemeTimer();
  }

  private setThemeTimer() {
    const source = interval(1000);
    this.subscription = source.subscribe(() => {
      if (this.theme === this.light) {
        this.theme = this.dark;
        this.setTheme(true);
      }
      else {
        this.theme = this.light;
        this.setTheme(false);
      }
    });
  }

  setTheme(dark: boolean) {
    if (dark) {
      this.theme = this.dark;
    } else {
      this.theme = this.light;
    }
    // console.log(this.overlayContainer);
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    // console.log(overlayContainerClasses);
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    // console.log(themeClassesToRemove);
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme);
  }
}
