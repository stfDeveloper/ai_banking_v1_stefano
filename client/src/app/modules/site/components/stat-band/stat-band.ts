import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { StatItem } from '../../interfaces/site.interface';

@Component({
  selector: 'app-stat-band',
  standalone: true,
  imports: [CommonModule, CountUpDirective, RevealDirective],
  templateUrl: './stat-band.html',
  styleUrl: './stat-band.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatBandComponent {
  @Input() items: StatItem[] = [];
}
