import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarsComponent implements OnInit {
  private readonly MAX_TRANSLATION = 3000;
  private readonly DEPTH_MULTIPLIER = 2;

  private starLayers: HTMLElement[] = [];

  ngOnInit(): void {
    this.starLayers = Array.from(document.querySelectorAll('[id^="stars"]'));
    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(throttleTime(10, undefined, { trailing: true }))
      .subscribe((event: MouseEvent) => this.onMouseMove(event));
  }

  private onMouseMove(event: MouseEvent): void {
    const x = (event.x / window.innerWidth) * 2 - 1;
    const y = (event.y / window.innerHeight) * 2 - 1;
    for (let i = 0; i < this.starLayers.length; i++) {
      const layer = this.starLayers[i];
      const strength = this.MAX_TRANSLATION * this.DEPTH_MULTIPLIER;
      const translate = `${strength * x}% ${strength * y}%`;
      layer?.animate(
        {
          translate,
        },
        { duration: 10000, fill: 'forwards', easing: 'ease' }
      );
    }
  }
}
