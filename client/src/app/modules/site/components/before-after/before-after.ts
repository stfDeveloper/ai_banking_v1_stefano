import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { BeforeAfterBlock } from '../../interfaces/site.interface';

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './before-after.html',
  styleUrl: './before-after.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeforeAfterComponent {
  @Input({ required: true }) content!: BeforeAfterBlock;
}
