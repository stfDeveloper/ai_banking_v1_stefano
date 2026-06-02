import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { LegalPage } from '../../interfaces/site.interface';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);

  private readonly data = toSignal(this.route.data, {
    initialValue: this.route.snapshot.data,
  });

  readonly page = computed<LegalPage | null>(() => {
    const doc = this.data()['doc'] as string | undefined;
    if (!doc) return null;
    const value = this.i18n.translate('site.legali.' + doc);
    return value && typeof value === 'object' && !Array.isArray(value)
      ? (value as unknown as LegalPage)
      : null;
  });
}
