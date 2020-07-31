import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from 'src/app/app.component';
import { CookieService } from 'src/app/shared/services/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  nightMode = true;
  private nightModeOn: string;
  private nightModeOff: string;
  tooltipText = this.nightModeOn;

  constructor(private app: AppComponent, private translate: TranslateService, private cookieService: CookieService) { }

  async ngOnInit(): Promise<void> {
    this.translate.onLangChange.subscribe(async () => {
      this.nightModeOn = await this.translate.get("header.darkModeOn").pipe().toPromise();
      this.nightModeOff = await this.translate.get("header.darkModeOff").pipe().toPromise();
      this.setTooltip();
    });

    this.nightMode = this.cookieService.getNightMode();
  }

  onSliderToggle() {
    this.setTooltip();
    this.app.setTheme(this.nightMode);
  }

  private setTooltip() {
    if (this.nightMode) {
      this.tooltipText = this.nightModeOn;
    }
    else {
      this.tooltipText = this.nightModeOff;
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.cookieService.setLanguage(language);
  }
}
