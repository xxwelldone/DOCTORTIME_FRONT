import { AppointmentResponse } from '../Appointment/AppointmentResponse';

export interface DoctorResponse {
  id: string;
  name: string;
  photoUrl: string;
  CRM: string;
  specialty: string;
  address: string;
  email: string;
  appointments: AppointmentResponse[];
}
