import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { PortfolioComponent } from './portfolio/components/portfolio/portfolio.component';
import { NotFoundComponent } from './ui/components/not-found/not-found.component';
import { paths } from './shared/util/app-paths';
import { PathResolveService } from './shared/services/path-resolve.service';

const routes: Routes = [
    {
        path: paths.base,
        component: PortfolioComponent,
    },
    {
        path: paths.home,
        redirectTo: paths.base,
        component: PortfolioComponent,
    },
    {
        path: '**',
        resolve:
        {
            path: PathResolveService
        },
        component: NotFoundComponent
    }
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 50]
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
