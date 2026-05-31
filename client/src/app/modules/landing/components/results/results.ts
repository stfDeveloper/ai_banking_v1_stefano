import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { KpiNumberItem } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, CountUpDirective, MagneticDirective],
  templateUrl: './results.html',
  styleUrl: './results.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  private readonly i18n = inject(I18nService);

  kpis(): KpiNumberItem[] {
    return this.i18n.list<KpiNumberItem>('landing.results.kpis');
  }

  numericTarget(value: string): number | null {
    const cleaned = value.replace(/[^0-9]/g, '');
    return cleaned ? Number(cleaned) : null;
  }
}
