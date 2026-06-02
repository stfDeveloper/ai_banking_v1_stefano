import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { NarrativeBlock } from '../../interfaces/site.interface';

@Component({
  selector: 'app-narrative',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './narrative.html',
  styleUrl: './narrative.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NarrativeComponent {
  @Input({ required: true }) content!: NarrativeBlock;
  @Input() align: 'left' | 'right' = 'left';
  @Input() linkLabel = '';
  @Input() linkPath = '';
}
