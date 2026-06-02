import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../../shared/directives/spotlight.directive';
import { BentoCell } from '../../interfaces/site.interface';

@Component({
  selector: 'app-bento',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective, SpotlightDirective],
  templateUrl: './bento.html',
  styleUrl: './bento.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BentoComponent {
  @Input() cells: BentoCell[] = [];
}
