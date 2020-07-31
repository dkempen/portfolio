import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { paths } from 'src/app/shared/util/app-paths';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  page: string;

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.route.data.pipe(take(1))
      .subscribe((data: { path: string }) => {
        this.page = data.path;
        if (this.page === '/') {
          this.page = '/' + paths.home;
        }
      });

    this.titleService.setTitle('Daan van Kempen - 404');
  }
}
