import { Routes } from '@angular/router';
import { SiteShellComponent } from './modules/site/shell/site-shell';

export const routes: Routes = [
  {
    path: '',
    component: SiteShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./modules/site/pages/home/home').then((m) => m.HomeComponent),
      },
      {
        path: 'servizi/:slug',
        loadComponent: () =>
          import('./modules/site/pages/service/service').then((m) => m.ServiceComponent),
      },
      {
        path: 'controversie/:slug',
        loadComponent: () =>
          import('./modules/site/pages/sos/sos').then((m) => m.SosComponent),
      },
      {
        path: 'chi-siamo',
        loadComponent: () =>
          import('./modules/site/pages/chi-siamo/chi-siamo').then((m) => m.ChiSiamoComponent),
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('./modules/site/pages/faq/faq-page').then((m) => m.FaqPageComponent),
      },
      {
        path: 'contatti',
        loadComponent: () =>
          import('./modules/site/pages/contatti/contatti').then((m) => m.ContattiComponent),
      },
      {
        path: 'privacy',
        data: { doc: 'privacy' },
        loadComponent: () =>
          import('./modules/site/pages/legal/legal').then((m) => m.LegalComponent),
      },
      {
        path: 'cookie',
        data: { doc: 'cookie' },
        loadComponent: () =>
          import('./modules/site/pages/legal/legal').then((m) => m.LegalComponent),
      },
      {
        path: 'disclaimer',
        data: { doc: 'disclaimer' },
        loadComponent: () =>
          import('./modules/site/pages/legal/legal').then((m) => m.LegalComponent),
      },
    ],
  },
  {
    path: 'v1',
    loadComponent: () =>
      import('./modules/landing/pages/landing-page/landing-page').then(
        (m) => m.LandingPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
