import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentRequest } from '../models/Appointment/AppointmentRequest';
import { DoctorAppointments } from '../models/Appointment/DoctorAppointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentEndpointService {
  private url: string = 'https://doctortime-api.onrender.com/appointments';
  constructor(private http: HttpClient) {}

  create(appointment: AppointmentRequest) {
    return this.http.post(`${this.url}/create`, appointment);
  }
  doctorappointments(doctorId: string): Observable<DoctorAppointments[]> {
    return this.http.get<DoctorAppointments[]>(
      `${this.url}/doctorappointments/${doctorId}`
    );
  }
}
