
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input() ratio = 1;
  @Input() limit = true;
  initialBottom = 0;

  constructor(private eleRef: ElementRef) {
    this.initialBottom = this.eleRef.nativeElement.getBoundingClientRect().bottom;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const newBottom = this.limiter(this.initialBottom - (window.scrollY * this.ratio));
    this.eleRef.nativeElement.style.bottom = newBottom + 'px';
  }

  private limiter(newBottom: number) {
    if (!this.limit) {
      return newBottom;
    }

    if (this.ratio > 0) {
      if (newBottom > this.initialBottom) {
        newBottom = this.initialBottom;
      }
    } else {
      if (newBottom < this.initialBottom) {
        newBottom = this.initialBottom;
      }
    }

    return newBottom;
  }
}
