import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  PLATFORM_ID,
  inject,
  AfterViewInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appSpotlight]',
  standalone: true,
})
export class SpotlightDirective implements AfterViewInit {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  @Input() spotlightColor = 'rgba(212, 162, 76, 0.18)';
  @Input() spotlightRadius = 320;

  private enabled = false;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;
    this.enabled = true;
    const el = this.host.nativeElement;
    el.style.setProperty('--spotlight-color', this.spotlightColor);
    el.style.setProperty('--spotlight-radius', `${this.spotlightRadius}px`);
    el.style.setProperty('position', 'relative');
    el.style.setProperty('overflow', 'hidden');
    el.style.setProperty('isolation', 'isolate');
  }

  @HostListener('pointermove', ['$event'])
  onMove(ev: PointerEvent): void {
    if (!this.enabled) return;
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    el.style.setProperty('--spotlight-x', `${x}px`);
    el.style.setProperty('--spotlight-y', `${y}px`);
    el.style.setProperty('--spotlight-opacity', '1');
  }

  @HostListener('pointerleave')
  onLeave(): void {
    if (!this.enabled) return;
    this.host.nativeElement.style.setProperty('--spotlight-opacity', '0');
  }
}
