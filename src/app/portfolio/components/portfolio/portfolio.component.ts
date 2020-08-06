import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment';
import firebase from 'firebase/app';
import 'firebase/analytics';
declare var AOS: any;

import { ApodApiService } from 'src/app/shared/services/apod-api.service';
import { CookieService } from 'src/app/shared/services/cookie.service';
import { Apod } from 'src/app/shared/models/apod';
import { Skill } from 'src/app/shared/models/skill';

import * as Projects from '../../../../assets/files/projects.json';
import * as Skills from '../../../../assets/files/skills.json';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  apod: Apod;
  apodSource: string;
  displayHdUrl = false; // True to get the high resulution apod image, false to save resources
  typewriterText: string[];
  projects: Project[] = (Projects as any).default;
  skills: Skill[] = (Skills as any).default;

  private readonly title = 'Daan van Kempen - Portfolio';
  private readonly description =
    'Welcome to my portfolio! I\'m Daan van Kempen, a software engineer. ' +
    'Experience in front-end, back-end and embedded software development.';
  private readonly typewriterSuffix = '...';

  constructor(
    private apodApiService: ApodApiService, private translate: TranslateService,
    private cookieService: CookieService, private titleService: Title, private metaService: Meta) { }

  async ngOnInit() {
    this.getApod();
    await this.initLanguage();
    this.setMetaData();
    this.initAnimations();
  }

  private getApod() {
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
    }
    else {
      // Just use the old one
      this.apod = apod;
      this.apodSource = this.apod.url;
    }
  }

  private async initLanguage() {
    this.translate.onLangChange.subscribe(async () => {
      await this.updateLanguageText();
    });
    await this.updateLanguageText();
  }

  private async updateLanguageText() {
    this.typewriterText = [
      // TODO: globalize
      await this.translate.get(marker('portfolio.typewriter1')).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker('portfolio.typewriter2')).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker('portfolio.typewriter3')).pipe().toPromise() + this.typewriterSuffix,
      await this.translate.get(marker('portfolio.typewriter4')).pipe().toPromise() + this.typewriterSuffix
    ];
  }

  private setMetaData() {
    this.titleService.setTitle(this.title);
    this.metaService.updateTag({
      name: 'description',
      content: this.description
    });
  }

  private initAnimations() {
    AOS.init();
  }

  onImageLoad() {
    if (this.displayHdUrl && this.apodSource !== this.apod.hdurl) {
      this.apodSource = this.apod.hdurl;
    }
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

  getSkillAnimation(skill: Skill) {
    let animation: string;
    switch (this.skills.indexOf(skill)) {
      case 0:
        animation = 'fade-up-right';
        break;
      case this.skills.length - 1:
        animation = 'fade-up-left';
        break;
      default:
        animation = 'fade-up';
        break;
    }
    return animation;
  }
}
