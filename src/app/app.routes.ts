import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/landing/landing.routes').then(
        (r) => r.landing_routes
      ),
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/Auth/auth.routes').then((r) => r.Auth_routes),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.routes').then((r) => r.home_routes),
  },
  { path: '**', redirectTo: '' },
];
