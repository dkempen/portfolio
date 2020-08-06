import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { UiModule } from '../ui/ui.module';
import { SharedModule } from '../shared/shared.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillComponent } from './components/skill/skill.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    TypewriterComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent
  ],
  imports: [
    UiModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports: [
    PortfolioComponent,
    TypewriterComponent,
    ProjectComponent
  ],
  providers: [
    TranslatePipe
  ]
})
export class PortfolioModule { }
