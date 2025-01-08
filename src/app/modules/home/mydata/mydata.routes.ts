import { Routes } from '@angular/router';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { NewPasswordComponent } from './new-password/new-password.component';

export const mydata_routes: Routes = [
  { path: '', component: MyinfoComponent },
  { path: 'password', component: NewPasswordComponent },
];
