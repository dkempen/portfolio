import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription, firstValueFrom, interval } from 'rxjs';
import { StorageService } from '../../../core/services/storage/storage.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsoleComponent implements OnInit, OnDestroy {
  @Input() texts: string[] | undefined;
  lastVisitDate: string | undefined;
  lastVisitIp: string | undefined;
  displayedText = '';
  displayedText$ = new BehaviorSubject(this.displayedText);
  subscription: Subscription | undefined;

  private readonly MILLIS_PER_CHAR = 50;
  private readonly MILLIS_BEFORE = 1000;
  private readonly MILLIS_AFTER = 2000;

  private textIndex = 0;
  private charIndex = -this.MILLIS_BEFORE / this.MILLIS_PER_CHAR;
  private backtracking = false;

  constructor(
    private translate: TranslateService,
    private storageService: StorageService
  ) {}

  async ngOnInit(): Promise<void> {
    const lastVisit = await this.storageService.getLastVisit();
    this.lastVisitDate = `${lastVisit[0]
      .toLocaleString(undefined, {
        month: 'short',
        day: '2-digit',
        weekday: 'short',
        hour: '2-digit',
        hour12: false,
        minute: '2-digit',
        second: '2-digit',
      })
      .replaceAll(',', '')} ${lastVisit[0].getFullYear().toString()}`;
    this.lastVisitIp = lastVisit[1];

    this.translate.onLangChange.subscribe(
      async () => await this.updateLanguageText()
    );
    await this.updateLanguageText();

    this.subscription = interval(this.MILLIS_PER_CHAR).subscribe(() => {
      if (this.texts === undefined || this.texts?.length === 0) return;

      if (
        !this.backtracking &&
        ++this.charIndex >=
          this.texts[this.textIndex].length +
            this.MILLIS_AFTER / this.MILLIS_PER_CHAR
      ) {
        this.backtracking = true;
        this.charIndex = this.texts[this.textIndex].length - 1;
      } else if (
        this.backtracking &&
        --this.charIndex <= -this.MILLIS_BEFORE / this.MILLIS_PER_CHAR
      ) {
        this.backtracking = false;
        this.charIndex = 0;
        this.textIndex++;
        this.textIndex %= this.texts.length;
      }
      this.displayedText = this.texts[this.textIndex].substring(
        0,
        this.charIndex + 1
      );
      this.displayedText$.next(this.displayedText);
    });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private async updateLanguageText(): Promise<void> {
    const suffix = '...';
    this.texts = [
      (await firstValueFrom(this.translate.get('portfolio.console1'))) + suffix,
      (await firstValueFrom(this.translate.get('portfolio.console2'))) + suffix,
      (await firstValueFrom(this.translate.get('portfolio.console3'))) + suffix,
      (await firstValueFrom(this.translate.get('portfolio.console4'))) + suffix,
    ];
  }
}
