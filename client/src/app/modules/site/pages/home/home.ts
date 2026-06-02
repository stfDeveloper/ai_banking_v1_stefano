import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { AuroraBgComponent } from '../../../landing/components/aurora-bg/aurora-bg';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { CheckTrioComponent } from '../../components/check-trio/check-trio';
import { BentoComponent } from '../../components/bento/bento';
import { StepperComponent } from '../../components/stepper/stepper';
import { SiteTestimonialsComponent } from '../../components/site-testimonials/site-testimonials';
import { UrgencyPillComponent } from '../../components/urgency-pill/urgency-pill';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta';
import { NarrativeComponent } from '../../components/narrative/narrative';
import { ProblemNumbersComponent } from '../../components/problem-numbers/problem-numbers';
import { OutcomesGridComponent } from '../../components/outcomes-grid/outcomes-grid';
import { SelfDiagnosisComponent } from '../../components/self-diagnosis/self-diagnosis';
import { AuthorityBandComponent } from '../../components/authority-band/authority-band';
import { StakesComponent } from '../../components/stakes/stakes';
import { DisclosureComponent } from '../../components/disclosure/disclosure';
import {
  AuthorityBlock,
  BentoCell,
  CheckItem,
  FaqItem,
  NarrativeBlock,
  OutcomeItem,
  ProblemNumbersBlock,
  SosTeaser,
  StakesBlock,
  StepItem,
  TestimonialItem,
} from '../../interfaces/site.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TPipe,
    AuroraBgComponent,
    RevealDirective,
    MagneticDirective,
    CheckTrioComponent,
    BentoComponent,
    StepperComponent,
    SiteTestimonialsComponent,
    UrgencyPillComponent,
    ContactCtaComponent,
    NarrativeComponent,
    ProblemNumbersComponent,
    OutcomesGridComponent,
    SelfDiagnosisComponent,
    AuthorityBandComponent,
    StakesComponent,
    DisclosureComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly i18n = inject(I18nService);

  readonly checks = this.i18n.list<CheckItem>('site.shared.checks');
  readonly cells = this.i18n.list<BentoCell>('site.home.bento.cells');
  readonly steps = this.i18n.list<StepItem>('site.shared.stepper.steps');
  readonly testimonials = this.i18n.list<TestimonialItem>('site.home.testimonials.items');
  readonly sosItems = this.i18n.list<SosTeaser>('site.home.sosBanner.items');
  readonly outcomes = this.i18n.list<OutcomeItem>('site.shared.outcomes');
  readonly faqPreview = this.i18n.list<FaqItem>('site.faq.items').slice(0, 3);

  readonly problemNarrative = this.i18n.translate('site.home.narrative.problem') as unknown as NarrativeBlock;
  readonly guideNarrative = this.i18n.translate('site.home.guide') as unknown as NarrativeBlock & {
    link: string;
    path: string;
  };
  readonly problemNumbers = this.i18n.translate('site.home.problemNumbers') as unknown as ProblemNumbersBlock;
  readonly stakes = this.i18n.translate('site.home.stakes') as unknown as StakesBlock;
  readonly authority = this.i18n.translate('site.shared.authority') as unknown as AuthorityBlock;

  tel(): string {
    return this.i18n.text('site.contact.telVerde');
  }

  whatsapp(): string {
    return this.i18n.text('site.contact.whatsappUrl');
  }
}
