import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public goTo(location: string): void {
    const height = document
      .getElementById(location)
      ?.getBoundingClientRect().top;
    if (height) window.scrollTo({ top: height - 50 });
  }
}
