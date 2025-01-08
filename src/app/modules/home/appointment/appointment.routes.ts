import { Routes } from '@angular/router';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { SelectionComponent } from './selection/selection.component';

export const appointment_routes: Routes = [
  { path: '', component: MakeAppointmentComponent },
  { path: 'selection', component: SelectionComponent },
];
