import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { FaqItem } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  private readonly i18n = inject(I18nService);

  openIdx = signal<number>(-1);

  items(): FaqItem[] {
    return this.i18n.list<FaqItem>('landing.faq.items');
  }

  toggle(i: number): void {
    this.openIdx.update((cur) => (cur === i ? -1 : i));
  }
}
