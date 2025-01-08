import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const home_routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'makeappointment',
    loadChildren: () =>
      import('./appointment/appointment.routes').then(
        (r) => r.appointment_routes
      ),
  },
  {
    path: 'myinfo',
    loadChildren: () =>
      import('../home/mydata/mydata.routes').then((r) => r.mydata_routes),
  },
];
