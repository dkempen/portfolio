import { ChangeDetectionStrategy, Component } from '@angular/core';
import skills from 'src/assets/data/skills.json';
import { Skill } from '../../../shared/models/skill';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPageComponent {
  skills: Skill[] = skills;
}
