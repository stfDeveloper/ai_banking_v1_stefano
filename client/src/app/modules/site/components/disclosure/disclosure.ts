import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';

let uid = 0;

@Component({
  selector: 'app-disclosure',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './disclosure.html',
  styleUrl: './disclosure.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisclosureComponent {
  @Input() label = '';
  @Input() labelKey = 'site.common.approfondisci';
  @Input() tone: 'mini' | 'faq' = 'mini';

  readonly open = signal(false);
  readonly id = `disc-${uid++}`;

  toggle(): void {
    this.open.update((v) => !v);
  }
}
