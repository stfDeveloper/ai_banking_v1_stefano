import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TPipe } from '../../../../shared/i18n/t.pipe';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { MagneticDirective } from '../../../../shared/directives/magnetic.directive';
import { AuroraBgComponent } from '../aurora-bg/aurora-bg';
import { CellMockComponent } from '../cell-mock/cell-mock';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TPipe, RevealDirective, MagneticDirective, AuroraBgComponent, CellMockComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
