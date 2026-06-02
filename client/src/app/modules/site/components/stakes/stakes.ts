import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { StakesBlock } from '../../interfaces/site.interface';

@Component({
  selector: 'app-stakes',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './stakes.html',
  styleUrl: './stakes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StakesComponent {
  @Input({ required: true }) content!: StakesBlock;
}
