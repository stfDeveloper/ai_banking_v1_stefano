import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { ScrollProgressDirective } from '../../../../shared/directives/scroll-progress.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { NavGroup } from '../../interfaces/site.interface';

@Component({
  selector: 'app-site-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    TPipe,
    ScrollProgressDirective,
    MagneticDirective,
  ],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteNavComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  readonly scrolled = signal(false);
  readonly mobileOpen = signal(false);
  readonly openGroup = signal<string | null>(null);

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        this.openGroup.set(null);
        this.mobileOpen.set(false);
      });
  }

  servizi(): NavGroup {
    return this.i18n.translate('site.nav.groups.servizi') as unknown as NavGroup;
  }

  controversie(): NavGroup {
    return this.i18n.translate('site.nav.groups.controversie') as unknown as NavGroup;
  }

  tel(): string {
    return this.i18n.text('site.contact.telVerde');
  }

  whatsapp(): string {
    return this.i18n.text('site.contact.whatsappUrl');
  }

  numeroVerde(): string {
    return this.i18n.text('site.contact.numeroVerde');
  }

  toggleGroup(key: string): void {
    this.openGroup.update((cur) => (cur === key ? null : key));
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.openGroup.set(null);
    this.mobileOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(ev: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = ev.target as HTMLElement | null;
    if (target && !target.closest('.nav-drop')) {
      this.openGroup.set(null);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 80);
  }
}
