import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fromYear = 2020;
  year: string;
  scrolledToBottom = false;

  constructor() { }

  ngOnInit() {
    this.setYear();
    this.reachedBottomListener();
  }

  private setYear() {
    const current = new Date().getFullYear();
    if (current <= this.fromYear) {
      this.year = current.toString();
    }
    else {
      this.year = this.fromYear + ' - ' + current.toString();
    }
  }

  private reachedBottomListener() {
    window.onscroll = () => {
      const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight,
        body.offsetHeight, html.clientHeight,
        html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowHeight < docHeight && windowBottom + 1 >= docHeight) {
        this.scrolledToBottom = true;
      } else {
        this.scrolledToBottom = false;
      }
    };
  }

  toTop() {
    window.scrollTo({ top: 0 });
  }
}
