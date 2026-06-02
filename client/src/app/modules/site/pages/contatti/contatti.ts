import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../components/page-hero/page-hero';
import { StepperComponent } from '../../components/stepper/stepper';
import { SelfDiagnosisComponent } from '../../components/self-diagnosis/self-diagnosis';
import { PageHeroContent, StepItem } from '../../interfaces/site.interface';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TPipe,
    RevealDirective,
    PageHeroComponent,
    StepperComponent,
    SelfDiagnosisComponent,
  ],
  templateUrl: './contatti.html',
  styleUrl: './contatti.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContattiComponent {
  private readonly i18n = inject(I18nService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly hero = this.i18n.translate('site.contatti.hero') as unknown as PageHeroContent;
  readonly steps = this.i18n.list<StepItem>('site.contatti.stepper.steps');
  readonly typeOptions = this.i18n.list<string>('site.contatti.form.typeOptions');

  readonly model = {
    name: '',
    phone: '',
    email: '',
    type: '',
    consentPrivacy: false,
    consentData: false,
  };

  readonly sent = signal(false);

  tel(): string {
    return this.i18n.text('site.contact.telVerde');
  }

  whatsapp(): string {
    return this.i18n.text('site.contact.whatsappUrl');
  }

  mailto(): string {
    return this.i18n.text('site.contact.mailto');
  }

  submit(): void {
    if (!this.model.consentPrivacy || !this.model.consentData) return;

    const lines = [
      `Nome: ${this.model.name}`,
      `Telefono: ${this.model.phone}`,
      `E-mail: ${this.model.email}`,
      `Tipologia: ${this.model.type}`,
    ].join('\n');

    const email = this.i18n.text('site.contact.email');
    const subject = encodeURIComponent('Richiesta di verifica gratuita');
    const body = encodeURIComponent(lines);

    this.sent.set(true);

    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  }
}
