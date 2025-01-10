import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { filter, map } from 'rxjs';
import { DoctorResponse } from '../../../../models/Doctor/doctor-response';
import { SharedAppointment } from '../../../../models/Appointment/SharedAppointment';
import { DoctorAppointments } from '../../../../models/Appointment/DoctorAppointment';
import { SharedAppointmentService } from '../../../../services/shared-appointment.service';
import { AppointmentEndpointService } from '../../../../services/appointment-endpoint.service';
import { Router } from '@angular/router';
import { AppointmentRequest } from '../../../../models/Appointment/AppointmentRequest';

@Component({
  selector: 'app-card-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-selection.component.html',
  styleUrl: './card-selection.component.css',
})
export class CardSelectionComponent implements OnInit {
  @Input() doctorDetails!: DoctorResponse;
  selected: boolean = false;
  time!: string;
  inicialDetails!: SharedAppointment;
  public expand: boolean = false;
  public availableTimes: { time: string; available: boolean }[] = [
    { time: '14:00', available: false },
    { time: '15:00', available: false },
    { time: '16:00', available: false },
    { time: '17:00', available: false },
    { time: '18:00', available: false },
    { time: '19:00', available: false },
  ];
  public nonAvailableDateTimes!: DoctorAppointments[];
  public dateWithoutTime!: string;
  constructor(
    private sharedAppointment: SharedAppointmentService,
    private appointmentAPI: AppointmentEndpointService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getSharedAppointment();
    this.getNonAvailableDateTimes();
  }
  onExpand() {
    this.expand = !this.expand;
  }
  selectTime(time: string) {
    this.time = time;
    this.selected = !this.selected;
  }
  onCancel() {
    this.selected = false;
    this.expand = true;
  }
  onConfirmation() {
    const formattedDate = this.stringToDate(
      this.inicialDetails.date,
      this.time
    );
    const newAppointment: AppointmentRequest = new AppointmentRequest(
      this.doctorDetails.id,
      this.inicialDetails.modality,
      formattedDate
    );

    this.appointmentAPI.create(newAppointment).subscribe({
      complete: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  stringToDate(date: string, time: string): string {
    const [year, month, day] = date.split('-').map(Number);
    const [hour, minute] = time.split(':').map(Number);
    const createdDate = new Date(year, month - 1, day, hour, minute);
    return this.formatDateToString(createdDate);
  }
  formatDateToString(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0'); // Garante que o dia tenha 2 dígitos
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Garante que o mês tenha 2 dígitos
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0'); // Garante que a hora tenha 2 dígitos
    const minute = String(date.getMinutes()).padStart(2, '0'); // Garante que os minutos tenham 2 dígitos

    // Retorna a data no formato "dd/MM/yyyy HH:mm"
    return `${day}/${month}/${year} ${hour}:${minute}`;
  }
  getSharedAppointment() {
    this.sharedAppointment.getSharedAppointment().subscribe((result) => {
      this.inicialDetails = result;
      const [date] = this.stringToDate(this.inicialDetails.date, '00:00').split(
        ' '
      );
      this.dateWithoutTime = date;
    });
  }
  getNonAvailableDateTimes() {
    this.appointmentAPI
      .doctorappointments(this.doctorDetails.id)
      .subscribe((result) => {
        this.nonAvailableDateTimes = result;
        this.checkAvailability();
      });
  }

  checkAvailability() {
    this.nonAvailableDateTimes.forEach((item) => {
      const [date, time] = item.date.split(' ');

      if (date == this.dateWithoutTime) {
        this.checkTimeAvailability(time);
      }
    });
  }
  checkTimeAvailability(time: string) {
    this.availableTimes.forEach((item) => {
      if (item.time == time) {
        item.available = true;
      }
    });
  }
}
