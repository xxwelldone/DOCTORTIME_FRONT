import { Component, Input, input, OnInit } from '@angular/core';
import { AppointmentResponse } from '../../../../models/Appointment/AppointmentResponse';
import { AppointmentEndpointService } from '../../../../services/appointment-endpoint.service';
import { Status } from '../../../../models/Appointment/status';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-agenda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-agenda.component.html',
  styleUrl: './card-agenda.component.css',
})
export class CardAgendaComponent implements OnInit {
  constructor(
    private appointmentAPI: AppointmentEndpointService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const [date, time] = String(this.appointment.date).split(' ');
    this.date = date;
    this.time = time;
  }
  @Input() appointment!: AppointmentResponse;
  date!: string;
  time!: string;
  cancel: boolean = false;
  onCancel() {
    this.cancel = true;
  }
  onReject() {
    this.cancel = false;
  }
  onConfirm() {
    this.appointmentAPI
      .cancel(this.appointment.id, Status.CANCELADO)
      .subscribe((response) => {
        this.appointment.status = response.status;
        this.cancel = false;
      });
  }
  onEdit() {
    this.router.navigate([`/home/myagenda/edit/${this.appointment.id}`]);
  }
}
