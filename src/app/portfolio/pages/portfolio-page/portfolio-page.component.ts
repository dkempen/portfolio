import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import skills from 'src/assets/data/skills.json';
import { DividerComponent } from '../../../shared/components/divider/divider.component';
import { StarsComponent } from '../../../shared/components/stars/stars.component';
import { Skill } from '../../../shared/models/skill';
import { ConsoleComponent } from '../../components/console/console.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { SkillComponent } from '../../components/skill/skill.component';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    StarsComponent,
    ConsoleComponent,
    DividerComponent,
    SkillComponent,
    ContactComponent,
  ],
  standalone: true,
})
export class PortfolioPageComponent {
  skills: Skill[] = skills;
}
