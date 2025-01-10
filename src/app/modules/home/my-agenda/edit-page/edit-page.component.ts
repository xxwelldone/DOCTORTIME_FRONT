import { Component, OnInit } from '@angular/core';
import { AppointmentResponse } from '../../../../models/Appointment/AppointmentResponse';
import { ActivatedRoute } from '@angular/router';
import { AppointmentEndpointService } from '../../../../services/appointment-endpoint.service';
import { UserEndpointService } from '../../../../services/user-endpoint.service';
import { FormGroup } from '@angular/forms';
import { DoctorAppointments } from '../../../../models/Appointment/DoctorAppointment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css',
})
export class EditPageComponent implements OnInit {
  public appointment!: AppointmentResponse;
  public nonAvailableDateTimes!: DoctorAppointments[];
  public dateWithoutTime!: string;
  public availableTimes: { time: string; available: boolean }[] = [
    { time: '14:00', available: false },
    { time: '15:00', available: false },
    { time: '16:00', available: false },
    { time: '17:00', available: false },
    { time: '18:00', available: false },
    { time: '19:00', available: false },
  ];
  appointmentForm: FormGroup = new FormGroup({});
  constructor(
    private activatedRoute: ActivatedRoute,
    private appointmentAPI: AppointmentEndpointService
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.appointmentAPI.appointmentById(id).subscribe({
      next: (response) => {
        this.appointment = response;
      },
      complete: () => {
        const [date, time] = this.appointment.date.toString().split(' ');
        this.dateWithoutTime = date;
        this.getNonAvailableDateTimes();
      },
    });
  }
  getNonAvailableDateTimes() {
    this.appointmentAPI
      .doctorappointments(this.appointment.doctor.id)
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
  printar(event: string) {
    console.log(event);
  }
}
