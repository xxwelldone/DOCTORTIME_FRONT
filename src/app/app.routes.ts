import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing/landing-page/landing-page.component';
import { LoginComponent } from './modules/login/login.component';

import { ProfileSignupComponent } from './modules/profile-signup/profile-signup.component';
import { UserSignUpComponent } from './modules/user-sign-up/user-sign-up.component';
import { WorkerSignUpComponent } from './modules/worker-sign-up/worker-sign-up.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'signup',
    children: [
      {
        path: '',
        component: ProfileSignupComponent,
      },
      { path: 'user', component: UserSignUpComponent },
      { path: 'worker', component: WorkerSignUpComponent },
    ],
  },
];
