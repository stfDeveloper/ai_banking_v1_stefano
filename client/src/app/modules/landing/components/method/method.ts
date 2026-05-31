import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../../shared/directives/spotlight.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { MethodCard } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, SpotlightDirective],
  templateUrl: './method.html',
  styleUrl: './method.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodComponent {
  private readonly i18n = inject(I18nService);

  cards(): MethodCard[] {
    return this.i18n.list<MethodCard>('landing.method.cards');
  }

  iconFor(key: string): string {
    switch (key) {
      case 'math':
        return 'M3 18h18M3 6h18M5 6v12M19 6v12M9 6v12M15 6v12';
      case 'ai':
        return 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83';
      case 'law':
        return 'M12 3v18M5 8h14M3 21h18M8 8l-3 13M16 8l3 13';
      default:
        return '';
    }
  }
}
