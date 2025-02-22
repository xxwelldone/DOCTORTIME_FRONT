import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/home/home.routes').then((r) => r.home_routes),
  },

  { path: '**', redirectTo: '' },
];
