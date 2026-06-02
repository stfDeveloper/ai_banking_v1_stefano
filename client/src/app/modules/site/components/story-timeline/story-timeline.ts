import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { StoryChapter } from '../../interfaces/site.interface';

@Component({
  selector: 'app-story-timeline',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './story-timeline.html',
  styleUrl: './story-timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryTimelineComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() chapters: StoryChapter[] = [];
}
