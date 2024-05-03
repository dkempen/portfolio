import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ConsoleComponent } from './components/console/console.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillComponent } from './components/skill/skill.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

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
