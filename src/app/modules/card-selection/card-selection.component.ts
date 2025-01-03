import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentRequest } from '../../models/Appointment/AppointmentRequest';
import { SharedAppointment } from '../../models/Appointment/SharedAppointment';
import { CommonModule } from '@angular/common';
import { DoctorResponse } from '../../models/Doctor/doctor-response';
import { SharedAppointmentService } from '../../services/shared-appointment.service';
import { AppointmentEndpointService } from '../../services/appointment-endpoint.service';
import { Router } from '@angular/router';

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
  public availableTimes: string[] = [
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
  ];
  constructor(
    private sharedAppointment: SharedAppointmentService,
    private appointmentAPI: AppointmentEndpointService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sharedAppointment.getSharedAppointment().subscribe((result) => {
      this.inicialDetails = result;
    });
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
    const newAppointment: AppointmentRequest = new AppointmentRequest(
      this.doctorDetails.id,
      this.inicialDetails.modality,
      this.inicialDetails.date,
      this.time
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
}
