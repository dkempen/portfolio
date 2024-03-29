import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skill } from '../../../shared/models/skill';
import skills from 'src/assets/data/skills.json';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioPageComponent {
  skills: Skill[] = skills;
}
