import { Component, Input, input, OnInit } from '@angular/core';
import { AppointmentResponse } from '../../../../models/Appointment/AppointmentResponse';

@Component({
  selector: 'app-card-agenda',
  standalone: true,
  imports: [],
  templateUrl: './card-agenda.component.html',
  styleUrl: './card-agenda.component.css',
})
export class CardAgendaComponent implements OnInit {
  ngOnInit(): void {
    const [date, time] = String(this.appointment.date).split(' ');
    this.date = date;
    this.time = time;
  }
  @Input() appointment!: AppointmentResponse;
  date!: string;
  time!: string;
}
