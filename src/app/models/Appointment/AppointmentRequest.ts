import { DoctorResponse } from '../Doctor/doctor-response';
import { SharedAppointment } from './SharedAppointment';

export class AppointmentRequest {
  public DoctorID: string;
  public modality: string;
  public date: string;

  constructor(DoctorID: string, modality: string, date: string) {
    this.DoctorID = DoctorID;
    this.date = date;
    this.modality = modality;
  }
}
