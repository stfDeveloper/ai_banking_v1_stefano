import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appMagnetic]',
  standalone: true,
})
export class MagneticDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  @Input() magneticStrength = 0.25;
  @Input() magneticMax = 8;

  private enabled = false;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.enabled = finePointer && !reducedMotion;
    if (this.enabled) {
      this.host.nativeElement.style.transition = 'transform 220ms cubic-bezier(0.2, 0.7, 0.1, 1)';
    }
  }

  @HostListener('pointermove', ['$event'])
  onMove(ev: PointerEvent): void {
    if (!this.enabled) return;
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (ev.clientX - cx) * this.magneticStrength;
    const dy = (ev.clientY - cy) * this.magneticStrength;
    const tx = Math.max(-this.magneticMax, Math.min(this.magneticMax, dx));
    const ty = Math.max(-this.magneticMax, Math.min(this.magneticMax, dy));
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  }

  @HostListener('pointerleave')
  onLeave(): void {
    if (!this.enabled) return;
    this.host.nativeElement.style.transform = 'translate3d(0, 0, 0)';
  }

  ngOnDestroy(): void {
    if (this.enabled) {
      this.host.nativeElement.style.transform = '';
    }
  }
}
