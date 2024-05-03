import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, NgbTooltip],
  standalone: true,
})
export class FooterComponent {
  year: string;
  scrolledToBottom = false;
  private readonly FROM_YEAR = 2020;

  constructor() {
    this.year = `${this.FROM_YEAR} - ${new Date().getFullYear()}`;
    this.reachedBottomListener();
  }

  public toTop(): void {
    window.scrollTo({ top: 0 });
  }

  private reachedBottomListener(): void {
    window.onscroll = (): void => {
      const position =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        document.documentElement.offsetHeight;
      const pageLength = document.documentElement.scrollHeight;
      this.scrolledToBottom = position + 1 >= pageLength;
    };
  }
}
