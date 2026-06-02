import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [CommonModule, RouterLink, TPipe, MagneticDirective, RevealDirective],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCtaComponent {
  private readonly i18n = inject(I18nService);

  @Input() variant: 'default' | 'urgent' = 'default';

  tel(): string {
    return this.i18n.text('site.contact.telVerde');
  }

  whatsapp(): string {
    return this.i18n.text('site.contact.whatsappUrl');
  }
}
