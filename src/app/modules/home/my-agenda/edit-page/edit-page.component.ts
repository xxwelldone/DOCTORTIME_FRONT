import { Component, OnInit } from '@angular/core';
import { AppointmentResponse } from '../../../../models/Appointment/AppointmentResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentEndpointService } from '../../../../services/appointment-endpoint.service';
import { UserEndpointService } from '../../../../services/user-endpoint.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DoctorAppointments } from '../../../../models/Appointment/DoctorAppointment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css',
})
export class EditPageComponent implements OnInit {
  public appointment!: AppointmentResponse;
  public nonAvailableDateTimes!: DoctorAppointments[];
  public userDate!: string;
  public userTime!: string;
  public availableTimes: { time: string; available: boolean }[] = [
    { time: '14:00', available: false },
    { time: '15:00', available: false },
    { time: '16:00', available: false },
    { time: '17:00', available: false },
    { time: '18:00', available: false },
    { time: '19:00', available: false },
  ];
  appointmentForm: FormGroup = new FormGroup({
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    modality: new FormControl('', [Validators.required]),
  });
  minDate!: string;
  selectedTime!: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appointmentAPI: AppointmentEndpointService
  ) {}
  ngOnInit(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    const id = this.activatedRoute.snapshot.params['id'];
    this.appointmentAPI.appointmentById(id).subscribe({
      next: (response) => {
        const [splitedDate, splitedTime] = response.date.toString().split(' ');
        this.appointment = response;
        this.appointmentForm.patchValue({
          date: this.formateDate(splitedDate),
          time: splitedTime,
          modality: response.modality,
        });
      },
      complete: () => {
        const [date, time] = this.appointment.date.toString().split(' ');
        this.userDate = date;
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
      if (date == this.userDate) {
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
  formateDate(date: string): string {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
  }
  onCancel() {
    this.router.navigate(['/home/myagenda']);
  }
  onConfirm() {
    const { date, time, modality } = this.appointmentForm.getRawValue();
    const dateFormated = this.combineDateAndTime(date, this.selectedTime);
    this.appointmentAPI
      .edit(this.appointment.id, dateFormated, modality)
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        complete: () => {
          this.router.navigate(['/home/myagenda']);
        },
      });
  }
  combineDateAndTime(date: string, time: string): string {
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.split(':');
    return `${day}/${month}/${year} ${hour}:${minute}`;
  }

  selectTime(selectedTime: string) {
    this.selectedTime = selectedTime;
  }
}
