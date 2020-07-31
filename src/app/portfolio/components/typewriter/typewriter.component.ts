import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit, OnDestroy {

  @Input() text: string[];
  displayedText = '';
  subscription: Subscription;

  speed = 50; // In ms per char
  pauseBefore = 500; // In ms
  pauseAfter = 1000; // In ms
  blinkingSpeed = 500; // In ms
  blinkingTimer = this.blinkingSpeed;

  currentString = 0;
  currentChar = -this.pauseBefore / this.speed;
  backtracking = false;
  cursorInvisible = true;
  cursor = ' ';

  constructor() { }

  ngOnInit() {
    const source = interval(this.speed);
    this.subscription = source.subscribe(() => {
      if (this.text === undefined || this.text?.length === 0) {
        return;
      }

      if (!this.backtracking && ++this.currentChar < this.text[this.currentString].length + this.pauseAfter / this.speed) {
      } else if (this.backtracking) {
        this.currentChar -= 1;
        if (this.currentChar < -this.pauseAfter / this.speed) {
          this.backtracking = false;
          this.currentChar = -1;
          if (++this.currentString >= this.text.length) {
            this.currentString = 0;
          }
        }
      } else {
        this.backtracking = true;
        this.currentChar--;
      }
      this.displayedText = this.text[this.currentString].substr(0, this.currentChar + 1);

      this.blinkingTimer += this.speed;
      if (this.blinkingTimer >= this.blinkingSpeed) {
        if (this.cursorInvisible) {
          this.cursor = '▌';
        } else {
          this.cursor = ' ';
        }
        this.cursorInvisible = !this.cursorInvisible;
        this.blinkingTimer = 0;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
