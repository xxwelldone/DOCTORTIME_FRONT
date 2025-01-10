import { Routes } from '@angular/router';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { EditPageComponent } from './edit-page/edit-page.component';

export const agenda_routes: Routes = [
  { path: '', component: MyAppointmentsComponent },
  { path: 'edit/:id', component: EditPageComponent },
];
