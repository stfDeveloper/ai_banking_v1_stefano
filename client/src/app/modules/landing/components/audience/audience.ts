import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { AudienceCard } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-audience',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective],
  templateUrl: './audience.html',
  styleUrl: './audience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudienceComponent {
  private readonly i18n = inject(I18nService);

  cards(): AudienceCard[] {
    return this.i18n.list<AudienceCard>('landing.audience.cards');
  }
}
