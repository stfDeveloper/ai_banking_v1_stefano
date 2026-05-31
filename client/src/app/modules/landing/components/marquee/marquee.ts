import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.html',
  styleUrl: './marquee.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeComponent {
  @Input() items: string[] = [];
  @Input() duration = 40;
  @Input() pauseOnHover = true;

  get loopItems(): string[] {
    return [...this.items, ...this.items];
  }
}
