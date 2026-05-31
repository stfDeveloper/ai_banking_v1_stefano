import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
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
