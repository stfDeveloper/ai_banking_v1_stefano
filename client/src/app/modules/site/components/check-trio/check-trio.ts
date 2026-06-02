import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { DisclosureComponent } from '../disclosure/disclosure';
import { CheckItem } from '../../interfaces/site.interface';

@Component({
  selector: 'app-check-trio',
  standalone: true,
  imports: [CommonModule, RevealDirective, DisclosureComponent],
  templateUrl: './check-trio.html',
  styleUrl: './check-trio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckTrioComponent {
  @Input() items: CheckItem[] = [];

  icon(index: number): string {
    return ['scale', 'alert', 'doc'][index % 3];
  }
}
