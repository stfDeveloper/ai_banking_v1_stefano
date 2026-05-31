import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { SosItem } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-sos',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, MagneticDirective],
  templateUrl: './sos.html',
  styleUrl: './sos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SosComponent {
  private readonly i18n = inject(I18nService);

  items(): SosItem[] {
    return this.i18n.list<SosItem>('landing.sos.items');
  }
}
