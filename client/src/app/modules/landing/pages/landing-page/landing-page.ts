import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from '../../components/nav/nav';
import { HeroComponent } from '../../components/hero/hero';
import { TruthComponent } from '../../components/truth/truth';
import { AuthorityComponent } from '../../components/authority/authority';
import { MethodComponent } from '../../components/method/method';
import { ResultsComponent } from '../../components/results/results';
import { FlowComponent } from '../../components/flow/flow';
import { FindingsComponent } from '../../components/findings/findings';
import { DemoRevealComponent } from '../../components/demo-reveal/demo-reveal';
import { AudienceComponent } from '../../components/audience/audience';
import { SosComponent } from '../../components/sos/sos';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { PillsComponent } from '../../components/pills/pills';
import { PressComponent } from '../../components/press/press';
import { FaqComponent } from '../../components/faq/faq';
import { CtaFinalComponent } from '../../components/cta-final/cta-final';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    HeroComponent,
    TruthComponent,
    AuthorityComponent,
    MethodComponent,
    ResultsComponent,
    FlowComponent,
    FindingsComponent,
    DemoRevealComponent,
    AudienceComponent,
    SosComponent,
    TestimonialsComponent,
    PillsComponent,
    PressComponent,
    FaqComponent,
    CtaFinalComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {}
