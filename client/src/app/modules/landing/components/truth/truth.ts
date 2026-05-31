import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { KpiItem } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-truth',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective],
  templateUrl: './truth.html',
  styleUrl: './truth.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruthComponent {
  private readonly i18n = inject(I18nService);

  kpis(): KpiItem[] {
    return this.i18n.list<KpiItem>('landing.truth.kpis');
  }
}
