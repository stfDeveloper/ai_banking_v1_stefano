import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../components/page-hero/page-hero';
import { StakesComponent } from '../../components/stakes/stakes';
import { StoryTimelineComponent } from '../../components/story-timeline/story-timeline';
import { DisclosureComponent } from '../../components/disclosure/disclosure';
import { CheckTrioComponent } from '../../components/check-trio/check-trio';
import { StepperComponent } from '../../components/stepper/stepper';
import { AuthorityBandComponent } from '../../components/authority-band/authority-band';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta';
import {
  AuthorityBlock,
  CheckItem,
  SosPageExtended,
  StepItem,
} from '../../interfaces/site.interface';

@Component({
  selector: 'app-sos',
  standalone: true,
  imports: [
    CommonModule,
    TPipe,
    RevealDirective,
    PageHeroComponent,
    StakesComponent,
    StoryTimelineComponent,
    DisclosureComponent,
    CheckTrioComponent,
    StepperComponent,
    AuthorityBandComponent,
    ContactCtaComponent,
  ],
  templateUrl: './sos.html',
  styleUrl: './sos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SosComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);

  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly slug = computed(() => this.params().get('slug') ?? '');

  readonly page = computed<SosPageExtended | null>(() => {
    const value = this.i18n.translate('site.controversie.' + this.slug());
    return value && typeof value === 'object' && !Array.isArray(value)
      ? (value as unknown as SosPageExtended)
      : null;
  });

  readonly verifiche: CheckItem[] = [
    ...this.i18n.list<CheckItem>('site.shared.checks'),
    this.i18n.translate('site.shared.creditoCheck') as unknown as CheckItem,
  ];

  readonly sosSteps = this.i18n.list<StepItem>('site.shared.sosStepper.steps');
  readonly authority = this.i18n.translate('site.shared.authority') as unknown as AuthorityBlock;
}
