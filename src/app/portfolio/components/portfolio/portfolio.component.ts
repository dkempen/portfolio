import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

import { ApodApiService } from 'src/app/shared/services/apod-api.service';
import { Apod } from 'src/app/shared/models/apod';
import { CookieService } from 'src/app/shared/services/cookie.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  apod: Apod;
  apodSource: string;
  typewriterText: string[];
  title: string;
  private readonly typewriterSuffix = '...';

  constructor(private apodApiService: ApodApiService, private translate: TranslateService,
    private cookieService: CookieService, private titleService: Title) { }

  async ngOnInit() {
    const apod = this.cookieService.getApod();
    // Is apod not defined or recent?
    if (apod?.url === undefined && (this.cookieService.getApodDate() === undefined
      || moment(this.cookieService.getApodDate()).add(1, 'hours').toDate() < new Date())) {
      // Then grab one
      this.apodApiService.getApod().subscribe(async (apod: Apod) => {
        // If the picture of the day is a video for some reason, grab yesterdays one
        if (apod.media_type !== 'image') {
          const yesterday = await this.apodApiService.getApodYesterday(apod.date).toPromise();
          if (yesterday.media_type !== 'image') {
            // 2 pictures of the day that aren't pictures? All hope is lost. My API key can only take so much
            this.cookieService.setApod(new Apod());
            return;
          }
          apod = yesterday;
        }

        // And save it
        this.apod = apod;
        this.apodSource = this.apod.url;
        this.cookieService.setApod(this.apod);
      });
    } else {
      // Just use the old one
      this.apod = apod;
      this.apodSource = this.apod.url;
    }

    this.translate.onLangChange.subscribe(async () => {
      await this.updateLanguageText();
    });

    await this.updateLanguageText();
  }

  private async updateLanguageText() {
    this.typewriterText = [
      // TODO: globalize
      await this.translate.get(marker("portfolio.typewriter1")).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker("portfolio.typewriter2")).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker("portfolio.typewriter3")).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker("portfolio.typewriter4")).pipe().toPromise() + this.typewriterSuffix
    ];

    this.title = 'Daan van Kempen - ' + await this.translate.get(marker("header.title")).pipe().toPromise();
    this.titleService.setTitle(this.title);
  }

  onImageLoad() {
    if (this.apodSource !== this.apod.hdurl) {
      this.apodSource = this.apod.hdurl;
    }
  }
}
