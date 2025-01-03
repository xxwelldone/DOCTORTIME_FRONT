import { DoctorResponse } from '../Doctor/doctor-response';
import { SharedAppointment } from './SharedAppointment';

export class AppointmentRequest {
  public DoctorID: string;
  public modality: string;
  public date: string;

  constructor(DoctorID: string, modality: string, date: string, time: string) {
    this.DoctorID = DoctorID;
    this.date = this.stringToDate(date, time);
    this.modality = modality;
  }

  stringToDate(date: string, time: string) {
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
}
