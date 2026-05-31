import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';

type CellState = 'empty' | 'loading' | 'result';

@Component({
  selector: 'app-cell-mock',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './cell-mock.html',
  styleUrl: './cell-mock.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellMockComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly i18n = inject(I18nService);

  @Input() autoplay = true;
  @Input() autoplayDelay = 4000;
  @Input() initialState: CellState = 'empty';

  state = signal<CellState>('empty');
  loadingStep = signal(0);

  private cycleTimeout?: number;
  private loadingInterval?: number;

  loadingItems(): string[] {
    return this.i18n.list<string>('landing.cell.stepLoadingItems');
  }

  resultBadges(): string[] {
    return this.i18n.list<string>('landing.cell.stepResultBadges');
  }

  ngOnInit(): void {
    this.state.set(this.initialState);
    if (this.autoplay && isPlatformBrowser(this.platformId)) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduced) {
        this.scheduleNext();
      }
    }
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  setState(newState: CellState): void {
    this.clearTimers();
    this.state.set(newState);
    if (newState === 'loading') {
      this.runLoading();
    }
    if (this.autoplay && isPlatformBrowser(this.platformId)) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduced) {
        this.scheduleNext();
      }
    }
  }

  cycle(): void {
    const current = this.state();
    if (current === 'empty') {
      this.setState('loading');
    } else if (current === 'loading') {
      this.setState('result');
    } else {
      this.setState('empty');
    }
  }

  private scheduleNext(): void {
    this.cycleTimeout = window.setTimeout(() => this.cycle(), this.autoplayDelay);
  }

  private runLoading(): void {
    this.loadingStep.set(0);
    const items = this.loadingItems();
    const stepMs = Math.max(400, Math.floor(this.autoplayDelay / Math.max(1, items.length)));
    this.loadingInterval = window.setInterval(() => {
      const next = this.loadingStep() + 1;
      if (next >= items.length) {
        if (this.loadingInterval) {
          clearInterval(this.loadingInterval);
          this.loadingInterval = undefined;
        }
      } else {
        this.loadingStep.set(next);
      }
    }, stepMs);
  }

  private clearTimers(): void {
    if (this.cycleTimeout) {
      clearTimeout(this.cycleTimeout);
      this.cycleTimeout = undefined;
    }
    if (this.loadingInterval) {
      clearInterval(this.loadingInterval);
      this.loadingInterval = undefined;
    }
  }
}
