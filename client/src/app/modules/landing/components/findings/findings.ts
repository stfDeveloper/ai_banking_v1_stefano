import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { FindingItem } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-findings',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective],
  templateUrl: './findings.html',
  styleUrl: './findings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindingsComponent {
  private readonly i18n = inject(I18nService);

  items(): FindingItem[] {
    return this.i18n.list<FindingItem>('landing.findings.items');
  }
}
