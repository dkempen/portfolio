import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core/core.module';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageToggleComponent } from './components/language-toggle/language-toggle.component';
import { StarsComponent } from './components/stars/stars.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    ThemeToggleComponent,
    LanguageToggleComponent,
    DividerComponent,
    StarsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgbTooltipModule,
    HttpClientModule,
    TranslateModule,
    CoreModule,
  ],
  exports: [
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    DividerComponent,
    StarsComponent,
  ],
})
export class SharedModule {}
