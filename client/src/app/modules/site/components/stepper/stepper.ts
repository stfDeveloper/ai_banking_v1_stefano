import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { StepItem } from '../../interfaces/site.interface';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  @Input() steps: StepItem[] = [];
}
