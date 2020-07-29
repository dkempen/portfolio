import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
