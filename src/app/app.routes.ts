import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { PortfolioPageComponent } from './portfolio/pages/portfolio-page/portfolio-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
