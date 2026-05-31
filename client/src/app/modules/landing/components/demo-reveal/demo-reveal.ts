import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { ContractRow, DemoDiscrepancy } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-demo-reveal',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, MagneticDirective],
  templateUrl: './demo-reveal.html',
  styleUrl: './demo-reveal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoRevealComponent {
  private readonly i18n = inject(I18nService);

  contract(): ContractRow[] {
    return this.i18n.list<ContractRow>('landing.demo.contractItems');
  }

  discrepancies(): DemoDiscrepancy[] {
    return this.i18n.list<DemoDiscrepancy>('landing.demo.discrepancies');
  }
}
