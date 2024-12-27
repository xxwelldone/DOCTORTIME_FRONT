import { AppointmentResponse } from '../Appointment/AppointmentResponse';

export interface UserResponse {
  id: string;
  address: string;
  cpf: string;
  email: string;
  appointments: AppointmentResponse[];
}
