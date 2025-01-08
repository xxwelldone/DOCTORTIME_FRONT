import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileSignupComponent } from './profile-signup/profile-signup.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { WorkerSignUpComponent } from './worker-sign-up/worker-sign-up.component';

export const Auth_routes: Routes = [
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
