import { Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing/landing-page/landing-page.component';
import { LoginComponent } from './modules/Auth/login/login.component';

import { ProfileSignupComponent } from './modules/Auth/profile-signup/profile-signup.component';
import { UserSignUpComponent } from './modules/Auth/user-sign-up/user-sign-up.component';
import { WorkerSignUpComponent } from './modules/Auth/worker-sign-up/worker-sign-up.component';
import { MainComponent } from './modules/main/main.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'auth',
    children: [
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
    ],
  },
  { path: 'main', component: MainComponent },
];
