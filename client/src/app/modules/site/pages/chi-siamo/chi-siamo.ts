import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../components/page-hero/page-hero';
import { NarrativeComponent } from '../../components/narrative/narrative';
import { StoryTimelineComponent } from '../../components/story-timeline/story-timeline';
import { StatBandComponent } from '../../components/stat-band/stat-band';
import { AuthorityBandComponent } from '../../components/authority-band/authority-band';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta';
import {
  AuthorityBlock,
  NarrativeBlock,
  PageHeroContent,
  StatItem,
  StoryChapter,
} from '../../interfaces/site.interface';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [
    CommonModule,
    TPipe,
    RevealDirective,
    PageHeroComponent,
    NarrativeComponent,
    StoryTimelineComponent,
    StatBandComponent,
    AuthorityBandComponent,
    ContactCtaComponent,
  ],
  templateUrl: './chi-siamo.html',
  styleUrl: './chi-siamo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChiSiamoComponent {
  private readonly i18n = inject(I18nService);

  readonly hero = this.i18n.translate('site.chiSiamo.hero') as unknown as PageHeroContent;
  readonly narrative = this.i18n.translate('site.chiSiamo.narrative') as unknown as NarrativeBlock;
  readonly timeline = this.i18n.list<StoryChapter>('site.chiSiamo.timeline');
  readonly modi = this.i18n.list<string>('site.chiSiamo.modi.items');
  readonly stats = this.i18n.list<StatItem>('site.shared.stat');
  readonly authority = this.i18n.translate('site.shared.authority') as unknown as AuthorityBlock;
}
