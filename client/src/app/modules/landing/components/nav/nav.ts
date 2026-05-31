import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { ScrollProgressDirective } from '../../../../shared/directives/scroll-progress.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, TPipe, ScrollProgressDirective, MagneticDirective],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  private readonly platformId = inject(PLATFORM_ID);

  scrolled = signal(false);
  mobileOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 80);
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
