import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year: string;
  scrolledToBottom = false;
  private readonly FROM_YEAR = 2020;

  constructor() {
    this.year = `${this.FROM_YEAR} - ${new Date().getFullYear()}`;
    this.reachedBottomListener();
  }

  private reachedBottomListener() {
    window.onscroll = () => {
      const position =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        document.documentElement.offsetHeight;
      const pageLength = document.documentElement.scrollHeight;
      this.scrolledToBottom = position + 1 >= pageLength;
    };
  }

  toTop() {
    window.scrollTo({ top: 0 });
  }
}
