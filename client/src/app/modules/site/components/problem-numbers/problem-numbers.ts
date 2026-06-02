import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { ProblemNumbersBlock } from '../../interfaces/site.interface';

@Component({
  selector: 'app-problem-numbers',
  standalone: true,
  imports: [CommonModule, CountUpDirective, RevealDirective],
  templateUrl: './problem-numbers.html',
  styleUrl: './problem-numbers.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProblemNumbersComponent {
  @Input({ required: true }) content!: ProblemNumbersBlock;
}
