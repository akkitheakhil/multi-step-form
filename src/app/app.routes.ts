import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'subscription',
    loadComponent: () =>
      import('./subscription/subscription.component').then(
        (mod) => mod.SubscriptionComponent
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
