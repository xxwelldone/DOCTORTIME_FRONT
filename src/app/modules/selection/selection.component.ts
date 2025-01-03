import { Component, OnInit } from '@angular/core';
import { CardSelectionComponent } from '../card-selection/card-selection.component';
import { DoctorEndpointService } from '../../services/doctor-endpoint.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { DoctorResponse } from '../../models/Doctor/doctor-response';
import { SharedAppointmentService } from '../../services/shared-appointment.service';
import { SharedAppointment } from '../../models/Appointment/SharedAppointment';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CardSelectionComponent],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
})
export class SelectionComponent implements OnInit {
  inicialDetails!: SharedAppointment;

  doctorArray!: DoctorResponse[];
  constructor(
    private doctorApi: DoctorEndpointService,
    private sharedAppointmentService: SharedAppointmentService
  ) {}

  ngOnInit(): void {
    this.sharedAppointmentService.getSharedAppointment().subscribe({
      next: (result) => {
        this.inicialDetails = result;
      },
    });
    this.doctorApi
      .getBySpecialty(this.inicialDetails.specialty, 0, 10)
      .subscribe((result) => {
        this.doctorArray = result;
      });
  }
}
