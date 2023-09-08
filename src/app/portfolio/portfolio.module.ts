import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { SharedModule } from '../shared/shared.module';
import { ConsoleComponent } from './components/console/console.component';
import { SkillComponent } from './components/skill/skill.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    PortfolioPageComponent,
    ConsoleComponent,
    SkillComponent,
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule, FormsModule, NgbTooltipModule, SharedModule],
})
export class PortfolioModule {}
