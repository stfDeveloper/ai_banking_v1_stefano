import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-urgency-pill',
  standalone: true,
  templateUrl: './urgency-pill.html',
  styleUrl: './urgency-pill.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UrgencyPillComponent {
  @Input() label = '';
}
