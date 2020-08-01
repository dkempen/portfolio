import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment';
import firebase from 'firebase/app';
import 'firebase/analytics';
declare var Rellax: any;

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
  projects = [1, 2, 3, 4, 5, 6, 7];

  constructor(
    private apodApiService: ApodApiService, private translate: TranslateService,
    private cookieService: CookieService, private titleService: Title, private metaService: Meta) { }

  async ngOnInit() {
    // Apod
    const apod = this.cookieService.getApod();
    // Is apod not defined or recent?
    if (apod?.url === undefined || (this.cookieService.getApodDate() === undefined
      || moment(this.cookieService.getApodDate()).add(1, 'hours').toDate() < new Date())) {
      // Then grab one
      this.apodApiService.getApod().subscribe(async (newApod: Apod) => {
        // If the picture of the day is a video for some reason, grab yesterdays one
        if (newApod.media_type !== 'image') {
          const yesterday = await this.apodApiService.getApodYesterday(newApod.date).toPromise();
          if (yesterday.media_type !== 'image') {
            // 2 pictures of the day that aren't pictures? All hope is lost. My API key can only take so much
            this.cookieService.setApod(new Apod());
            return;
          }
          newApod = yesterday;
        }

        // And save it
        this.apod = newApod;
        this.apodSource = this.apod.url;
        this.cookieService.setApod(this.apod);
      });
    } else {
      // Just use the old one
      this.apod = apod;
      this.apodSource = this.apod.url;
    }

    // Language
    this.translate.onLangChange.subscribe(async () => {
      await this.updateLanguageText();
    });

    await this.updateLanguageText();

    // Rellax
    // tslint:disable-next-line: no-unused-expression
    new Rellax('.rellax');
  }

  private async updateLanguageText() {
    this.typewriterText = [
      // TODO: globalize
      await this.translate.get(marker('portfolio.typewriter1')).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker('portfolio.typewriter2')).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker('portfolio.typewriter3')).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker('portfolio.typewriter4')).pipe().toPromise() + this.typewriterSuffix
    ];

    this.title = 'Daan van Kempen - ' + await this.translate.get(marker('header.title')).pipe().toPromise();
    this.titleService.setTitle(this.title);
    this.metaService.updateTag({
      name: 'description',
      content: 'I\'m Daan van Kempen, a software engineer. Experience in front-end, back-end and embedded software development.'
    });
  }

  onImageLoad() {
    // Enable to get the high resulution apod image
    // Leave commented to save resources

    // if (this.apodSource !== this.apod.hdurl) {
    //   this.apodSource = this.apod.hdurl;
    // }
  }

  onGitHubClick() {
    firebase.analytics().logEvent('github_clicked');
  }

  onLinkedInClick() {
    firebase.analytics().logEvent('linkedin_clicked');
  }

  onMailClick() {
    firebase.analytics().logEvent('mail_clicked');
  }
}
