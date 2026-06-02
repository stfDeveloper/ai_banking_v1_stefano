import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { PageHeroComponent } from '../../components/page-hero/page-hero';
import { DisclosureComponent } from '../../components/disclosure/disclosure';
import { ContactCtaComponent } from '../../components/contact-cta/contact-cta';
import { FaqItem, PageHeroContent } from '../../interfaces/site.interface';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [
    CommonModule,
    TPipe,
    RevealDirective,
    MagneticDirective,
    PageHeroComponent,
    DisclosureComponent,
    ContactCtaComponent,
  ],
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqPageComponent {
  private readonly i18n = inject(I18nService);

  readonly hero = this.i18n.translate('site.faq.hero') as unknown as PageHeroContent;
  readonly items = this.i18n.list<FaqItem>('site.faq.items');

  tel(): string {
    return this.i18n.text('site.contact.telVerde');
  }
}
