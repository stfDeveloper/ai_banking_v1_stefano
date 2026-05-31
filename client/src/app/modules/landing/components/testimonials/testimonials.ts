import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { TestimonialItem } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  private readonly i18n = inject(I18nService);
  private readonly platformId = inject(PLATFORM_ID);
  private timer?: number;

  active = signal(0);

  items(): TestimonialItem[] {
    return this.i18n.list<TestimonialItem>('landing.testimonials.items');
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      this.timer = window.setInterval(() => this.next(), 6500);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  next(): void {
    const total = this.items().length || 1;
    this.active.set((this.active() + 1) % total);
    this.restart();
  }

  prev(): void {
    const total = this.items().length || 1;
    this.active.set((this.active() - 1 + total) % total);
    this.restart();
  }

  goTo(i: number): void {
    this.active.set(i);
    this.restart();
  }

  private restart(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.timer) clearInterval(this.timer);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      this.timer = window.setInterval(() => this.next(), 6500);
    }
  }
}
