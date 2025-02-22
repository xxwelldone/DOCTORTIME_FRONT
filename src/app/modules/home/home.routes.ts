import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UserRoleGuard } from '../../guards/UserRole.guard';
import { workerRoleGuard } from '../../guards/worker-role.guard';

export const home_routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'makeappointment',
    canActivate: [UserRoleGuard],
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
  {
    path: 'myagenda',
    canActivate: [UserRoleGuard],
    loadChildren: () =>
      import('../home/my-agenda/agenda.routes').then((r) => r.agenda_routes),
  },
  {
    path: 'adddoctor',
    canActivate: [workerRoleGuard],
    component: AddDoctorComponent,
  },
];
