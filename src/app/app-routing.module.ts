import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/components/portfolio/portfolio.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
        component: PortfolioComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
