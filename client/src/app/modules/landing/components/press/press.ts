import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MarqueeComponent } from '../marquee/marquee';
import { I18nService } from '../../../../shared/i18n/i18n.service';

@Component({
  selector: 'app-press',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, MarqueeComponent],
  templateUrl: './press.html',
  styleUrl: './press.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PressComponent {
  private readonly i18n = inject(I18nService);

  papers(): string[] {
    return this.i18n.list<string>('landing.press.papers');
  }

  sentences(): string[] {
    return this.i18n.list<string>('landing.press.sentences');
  }
}
