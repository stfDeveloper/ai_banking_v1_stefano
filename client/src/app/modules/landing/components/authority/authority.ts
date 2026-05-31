import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../../shared/directives/spotlight.directive';
import { I18nService } from '../../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-authority',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, SpotlightDirective],
  templateUrl: './authority.html',
  styleUrl: './authority.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorityComponent {
  private readonly i18n = inject(I18nService);

  papers(): string[] {
    return this.i18n.list<string>('landing.authority.papers');
  }
}
