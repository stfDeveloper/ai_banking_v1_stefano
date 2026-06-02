import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueeComponent } from '../../../landing/components/marquee/marquee';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { AuthorityBlock } from '../../interfaces/site.interface';

@Component({
  selector: 'app-authority-band',
  standalone: true,
  imports: [CommonModule, MarqueeComponent, RevealDirective],
  templateUrl: './authority-band.html',
  styleUrl: './authority-band.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorityBandComponent {
  @Input({ required: true }) content!: AuthorityBlock;
}
