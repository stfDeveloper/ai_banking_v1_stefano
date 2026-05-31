import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private animation?: number;

  @Input('appCountUp') target = 0;
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() duration = 1600;
  @Input() decimals = 0;
  @Input() thousandSep = '.';

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.render(this.target);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.render(this.target);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      this.start();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          this.start();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    this.observer.observe(this.host.nativeElement);
    // initial render at 0
    this.render(0);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animation) {
      cancelAnimationFrame(this.animation);
    }
  }

  private start(): void {
    const startTs = performance.now();
    const from = 0;
    const to = this.target;
    const dur = this.duration;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / dur);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const value = from + (to - from) * eased;
      this.render(value);
      if (t < 1) {
        this.animation = requestAnimationFrame(tick);
      }
    };

    this.animation = requestAnimationFrame(tick);
  }

  private render(value: number): void {
    const formatted = this.format(value);
    this.host.nativeElement.textContent = `${this.prefix}${formatted}${this.suffix}`;
  }

  private format(value: number): string {
    const rounded = this.decimals === 0 ? Math.round(value) : Number(value.toFixed(this.decimals));
    const integerPart = Math.trunc(rounded).toString();
    const grouped = this.groupThousands(integerPart);
    if (this.decimals === 0) {
      return grouped;
    }
    const decimalPart = (rounded - Math.trunc(rounded)).toFixed(this.decimals).slice(2);
    return `${grouped},${decimalPart}`;
  }

  private groupThousands(intStr: string): string {
    const sign = intStr.startsWith('-') ? '-' : '';
    const digits = sign ? intStr.slice(1) : intStr;
    let out = '';
    for (let i = 0; i < digits.length; i++) {
      if (i > 0 && (digits.length - i) % 3 === 0) {
        out += this.thousandSep;
      }
      out += digits[i];
    }
    return sign + out;
  }
}
