import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { FooterColumn } from '../../interfaces/landing.interface';

interface FooterColumns {
  service: FooterColumn;
  method: FooterColumn;
  resources: FooterColumn;
  legal: FooterColumn;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly i18n = inject(I18nService);

  columns(): FooterColumn[] {
    const cols = this.i18n.translate('landing.footer.columns') as unknown as FooterColumns;
    if (!cols || typeof cols !== 'object') return [];
    return [cols.service, cols.method, cols.resources, cols.legal].filter(
      (c): c is FooterColumn => !!c && typeof c.title === 'string'
    );
  }
}
