import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    TypewriterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports: [
    PortfolioComponent,
    TypewriterComponent
  ],
  providers: [
    TranslatePipe
  ]
})
export class PortfolioModule { }
