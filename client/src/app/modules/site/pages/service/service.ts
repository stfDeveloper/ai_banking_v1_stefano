import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../components/page-hero/page-hero';
import { NarrativeComponent } from '../../components/narrative/narrative';
import { BeforeAfterComponent } from '../../components/before-after/before-after';
import { CheckTrioComponent } from '../../components/check-trio/check-trio';
import { OutcomesGridComponent } from '../../components/outcomes-grid/outcomes-grid';
import { StakesComponent } from '../../components/stakes/stakes';
import { StepperComponent } from '../../components/stepper/stepper';
import { StatBandComponent } from '../../components/stat-band/stat-band';
import { AuthorityBandComponent } from '../../components/authority-band/authority-band';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta';
import {
  AuthorityBlock,
  CheckItem,
  ServiceLayout,
  ServicePageExtended,
  ServiceSectionId,
  StatItem,
  StepItem,
} from '../../interfaces/site.interface';

type SectionTone = 'site-section--canvas' | 'site-section--panel' | 'site-section--deep' | 'site-section--gradient';

const SECTION_TONES: SectionTone[] = [
  'site-section--canvas',
  'site-section--panel',
  'site-section--deep',
];

const FEATURED_TONES: Partial<Record<ServiceLayout, Partial<Record<ServiceSectionId, SectionTone>>>> = {
  conti: { beforeAfter: 'site-section--gradient' },
  leasing: { tipi: 'site-section--gradient' },
  finanziamenti: { outcomes: 'site-section--gradient' },
};

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
    TPipe,
    RevealDirective,
    PageHeroComponent,
    NarrativeComponent,
    BeforeAfterComponent,
    CheckTrioComponent,
    OutcomesGridComponent,
    StakesComponent,
    StepperComponent,
    StatBandComponent,
    AuthorityBandComponent,
    ContactCtaComponent,
  ],
  templateUrl: './service.html',
  styleUrl: './service.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);

  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly slug = computed(() => this.params().get('slug') ?? '');

  readonly page = computed<ServicePageExtended | null>(() => {
    const value = this.i18n.translate('site.servizi.' + this.slug());
    return value && typeof value === 'object' && !Array.isArray(value)
      ? (value as unknown as ServicePageExtended)
      : null;
  });

  readonly checks = this.i18n.list<CheckItem>('site.shared.checks');
  readonly steps = this.i18n.list<StepItem>('site.shared.stepper.steps');
  readonly stats = this.i18n.list<StatItem>('site.shared.stat');
  readonly authority = this.i18n.translate('site.shared.authority') as unknown as AuthorityBlock;

  sectionTone(section: ServiceSectionId, index: number, layout: ServiceLayout): SectionTone {
    return FEATURED_TONES[layout]?.[section] ?? SECTION_TONES[index % SECTION_TONES.length];
  }

  narrativeAlign(layout: ServiceLayout): 'left' | 'right' {
    return layout === 'conti' ? 'right' : 'left';
  }
}
