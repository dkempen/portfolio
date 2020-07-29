import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  darkMode = false;
  darkModeOn: string;
  darkModeOff: string;
  tooltipText = this.darkModeOff;
  subscription: Subscription;

  constructor(public app: AppComponent, public translate: TranslateService) { }

  async ngOnInit(): Promise<void> {
    this.translate.onLangChange.subscribe(async () => {
      this.darkModeOn = await this.translate.get("header.darkModeOn").pipe().toPromise();
      this.darkModeOff = await this.translate.get("header.darkModeOff").pipe().toPromise();
      this.setTooltip();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSliderToggle(checked: boolean) {
    this.darkMode = checked;
    this.setTooltip();
    this.app.setTheme(this.darkMode);
  }

  private setTooltip() {
    if (this.darkMode) {
      this.tooltipText = this.darkModeOn;
    }
    else {
      this.tooltipText = this.darkModeOff;
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
