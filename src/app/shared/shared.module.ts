import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CoreModule } from '../core/core.module';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LanguageToggleComponent } from './components/language-toggle/language-toggle.component';
import { DividerComponent } from './components/divider/divider.component';
import { StarsComponent } from './components/stars/stars.component';

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
