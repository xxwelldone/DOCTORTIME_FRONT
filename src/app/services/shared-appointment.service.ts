import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { SharedAppointment } from '../models/Appointment/SharedAppointment';

@Injectable({
  providedIn: 'root',
})
export class SharedAppointmentService {
  public inicialDetailsAppointment$: ReplaySubject<SharedAppointment> =
    new ReplaySubject<SharedAppointment>(2);

  public getSharedAppointment(): Observable<SharedAppointment> {
    return this.inicialDetailsAppointment$.asObservable();
  }
  public setSharedAppointment(sharedAppointment: SharedAppointment) {
    this.inicialDetailsAppointment$.next(sharedAppointment);
  }
}
