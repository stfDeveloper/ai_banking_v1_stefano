import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraBgComponent } from '../../../landing/components/aurora-bg/aurora-bg';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { UrgencyPillComponent } from '../urgency-pill/urgency-pill';
import { ContactCtaComponent } from '../contact-cta/contact-cta';
import { PageHeroContent } from '../../interfaces/site.interface';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule, AuroraBgComponent, RevealDirective, UrgencyPillComponent, ContactCtaComponent],
  templateUrl: './page-hero.html',
  styleUrl: './page-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeroComponent {
  @Input() content!: PageHeroContent;
  @Input() deadline = '';
  @Input() urgent = false;
  @Input() showCta = true;
  @Input() accent = '';
}
