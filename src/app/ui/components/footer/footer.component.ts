import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fromYear = 2020;
  year: string;

  constructor() { }

  ngOnInit(): void {
    const current = new Date().getFullYear();
    if (current <= this.fromYear) {
      this.year = current.toString();
    } else {
      this.year = this.fromYear + ' - ' + current.toString();
    }
  }
}
