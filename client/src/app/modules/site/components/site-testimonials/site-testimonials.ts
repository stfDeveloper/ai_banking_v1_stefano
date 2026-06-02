import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { TestimonialItem } from '../../interfaces/site.interface';

@Component({
  selector: 'app-site-testimonials',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './site-testimonials.html',
  styleUrl: './site-testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteTestimonialsComponent {
  @Input() items: TestimonialItem[] = [];
}
