import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentRequest } from '../models/Appointment/AppointmentRequest';
import { DoctorAppointments } from '../models/Appointment/DoctorAppointment';
import { Observable } from 'rxjs';
import { AppointmentResponse } from '../models/Appointment/AppointmentResponse';
import { Status } from '../models/Appointment/status';

@Injectable({
  providedIn: 'root',
})
export class AppointmentEndpointService {
  private url: string = 'https://doctortime-api.onrender.com/appointments';
  constructor(private http: HttpClient) {}

  create(appointment: AppointmentRequest): Observable<AppointmentResponse> {
    return this.http.post<AppointmentResponse>(
      `${this.url}/create`,
      appointment
    );
  }
  doctorappointments(doctorId: string): Observable<DoctorAppointments[]> {
    return this.http.get<DoctorAppointments[]>(
      `${this.url}/doctorappointments/${doctorId}`
    );
  }
  appointments(): Observable<AppointmentResponse[]> {
    return this.http.get<AppointmentResponse[]>(
      `${this.url}/AppointmentOfUser`
    );
  }
  cancel(appointmentId: string, status: Status) {
    return this.http.put<AppointmentResponse>(`${this.url}/${appointmentId}`, {
      status,
    });
  }
  edit(appointmentId: string, date: string, modality: string) {
    return this.http.put<AppointmentResponse>(`${this.url}/${appointmentId}`, {
      date,
      modality,
    });
  }
  appointmentById(id: string): Observable<AppointmentResponse> {
    return this.http.get<AppointmentResponse>(`${this.url}/${id}`);
  }
}
