import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { CellMockComponent } from '../cell-mock/cell-mock';
import { I18nService } from '../../../../shared/i18n/i18n.service';
import { FlowStep } from '../../interfaces/landing.interface';

@Component({
  selector: 'app-flow',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, MagneticDirective, CellMockComponent],
  templateUrl: './flow.html',
  styleUrl: './flow.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowComponent {
  private readonly i18n = inject(I18nService);

  steps(): FlowStep[] {
    return this.i18n.list<FlowStep>('landing.flow.steps');
  }
}
