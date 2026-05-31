import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { PillItem } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-pills',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective],
  templateUrl: './pills.html',
  styleUrl: './pills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillsComponent {
  private readonly i18n = inject(I18nService);

  items(): PillItem[] {
    return this.i18n.list<PillItem>('landing.pills.items');
  }
}
