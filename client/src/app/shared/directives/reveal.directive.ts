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
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  @Input('appReveal') variant: 'fade' | 'scale' | 'stagger' = 'fade';
  @Input() revealThreshold = 0.15;
  @Input() revealRootMargin = '0px 0px -10% 0px';
  @Input() revealOnce = true;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.host.nativeElement.classList.add('is-revealed');
      return;
    }

    const el = this.host.nativeElement;
    el.setAttribute('data-reveal', this.variant === 'scale' ? 'scale' : '');
    if (this.variant === 'stagger') {
      el.setAttribute('data-stagger', '');
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-revealed');
            if (this.revealOnce && this.observer) {
              this.observer.unobserve(entry.target);
            }
          } else if (!this.revealOnce) {
            el.classList.remove('is-revealed');
          }
        }
      },
      {
        threshold: this.revealThreshold,
        rootMargin: this.revealRootMargin,
      }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
