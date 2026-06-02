import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { OutcomeItem } from '../../interfaces/site.interface';
import {
  LucideTrendingDown,
  LucideShield,
  LucideHandCoins,
  LucideCalendar,
  LucideCheckCircle,
} from '@lucide/angular';

@Component({
  selector: 'app-outcomes-grid',
  standalone: true,
  imports: [
    CommonModule,
    RevealDirective,
    LucideTrendingDown,
    LucideShield,
    LucideHandCoins,
    LucideCalendar,
    LucideCheckCircle,
  ],
  templateUrl: './outcomes-grid.html',
  styleUrl: './outcomes-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutcomesGridComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() lead = '';
  @Input() items: OutcomeItem[] = [];
}
