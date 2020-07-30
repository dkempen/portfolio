import { Component, OnInit } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ApodApiService } from 'src/app/shared/services/apod-api.service';
import { Apod } from 'src/app/shared/models/apod';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  apod: Apod;
  apodSource: string;
  typewriterText: string[];

  constructor(private apodApiService: ApodApiService, public translate: TranslateService, private translatePipe: TranslatePipe) { }

  async ngOnInit() {
    this.apodApiService.getApod().subscribe((apod: Apod) => {
      this.apod = apod;
      this.apodSource = this.apod.url;
    });

    this.translate.onLangChange.subscribe(async () => {
      // TODO: globalize
      this.typewriterText = [
        await this.translate.get(marker("portfolio.typewriter1")).pipe().toPromise(),
        await this.translate.get(marker("portfolio.typewriter2")).pipe().toPromise(),
        await this.translate.get(marker("portfolio.typewriter3")).pipe().toPromise(),
        await this.translate.get(marker("portfolio.typewriter4")).pipe().toPromise()
      ];
    });
  }

  onImageLoad() {
    if (this.apodSource !== this.apod.hdurl) {
      this.apodSource = this.apod.hdurl;
    }
  }
}
