import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteNavComponent } from '../components/site-nav/site-nav';
import { SiteFooterComponent } from '../components/site-footer/site-footer';

@Component({
  selector: 'app-site-shell',
  standalone: true,
  imports: [RouterOutlet, SiteNavComponent, SiteFooterComponent],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteShellComponent {}
