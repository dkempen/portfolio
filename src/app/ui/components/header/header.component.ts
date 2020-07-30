import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nightMode = false;
  nightModeOn: string;
  nightModeOff: string;
  tooltipText = this.nightModeOff;

  constructor(public app: AppComponent, public translate: TranslateService) { }

  async ngOnInit(): Promise<void> {
    this.translate.onLangChange.subscribe(async () => {
      this.nightModeOn = await this.translate.get("header.darkModeOn").pipe().toPromise();
      this.nightModeOff = await this.translate.get("header.darkModeOff").pipe().toPromise();
      this.setTooltip();
    });
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
  }
}
