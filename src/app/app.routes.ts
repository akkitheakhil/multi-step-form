import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'subscription',
    loadComponent: () =>
      import('./subscription-page/subscription-page.component').then(
        (mod) => mod.SubscriptionPageComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./not-found.component').then((mod) => mod.NotFoundComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'subscription',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
