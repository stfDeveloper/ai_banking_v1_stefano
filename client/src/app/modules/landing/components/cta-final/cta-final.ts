import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, MagneticDirective],
  templateUrl: './cta-final.html',
  styleUrl: './cta-final.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaFinalComponent {}
