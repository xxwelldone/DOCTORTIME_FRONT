import { Component, OnInit } from '@angular/core';
import { CardAgendaComponent } from '../card-agenda/card-agenda.component';
import { AppointmentResponse } from '../../../../models/Appointment/AppointmentResponse';
import { AppointmentEndpointService } from '../../../../services/appointment-endpoint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [CardAgendaComponent],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css',
})
export class MyAppointmentsComponent implements OnInit {
  agenda!: AppointmentResponse[];
  constructor(
    private appointmentAPI: AppointmentEndpointService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.appointmentAPI
      .appointments()
      .subscribe((response) => (this.agenda = response));
  }
  onBack() {
    this.router.navigate(['/home']);
  }
}
