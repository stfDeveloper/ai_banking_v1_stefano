import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { FooterColumn } from '../../interfaces/site.interface';

interface FooterColumns {
  servizi: FooterColumn;
  controversie: FooterColumn;
  azienda: FooterColumn;
  legali: FooterColumn;
}

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TPipe],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  private readonly i18n = inject(I18nService);

  readonly year = new Date().getFullYear();

  columns(): FooterColumn[] {
    const cols = this.i18n.translate('site.footer.columns') as unknown as FooterColumns;
    if (!cols || typeof cols !== 'object') return [];
    return [cols.servizi, cols.controversie, cols.azienda, cols.legali].filter(
      (c): c is FooterColumn => !!c && typeof c.title === 'string'
    );
  }

  tel(): string {
    return this.i18n.text('site.contact.telVerde');
  }

  whatsapp(): string {
    return this.i18n.text('site.contact.whatsappUrl');
  }

  mailto(): string {
    return this.i18n.text('site.contact.mailto');
  }
}
