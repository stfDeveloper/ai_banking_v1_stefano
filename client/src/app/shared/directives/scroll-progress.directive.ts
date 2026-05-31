import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollProgress]',
  standalone: true,
})
export class ScrollProgressDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private listener?: () => void;
  private rafId?: number;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.host.nativeElement;
    el.style.transformOrigin = 'left center';
    el.style.transform = 'scaleX(0)';
    el.style.willChange = 'transform';

    const handler = () => {
      if (this.rafId) return;
      this.rafId = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, Math.max(0, scrolled / max)) : 0;
        el.style.transform = `scaleX(${ratio})`;
        this.rafId = undefined;
      });
    };

    this.listener = handler;
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler, { passive: true });
    handler();
  }

  ngOnDestroy(): void {
    if (this.listener) {
      window.removeEventListener('scroll', this.listener);
      window.removeEventListener('resize', this.listener);
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
