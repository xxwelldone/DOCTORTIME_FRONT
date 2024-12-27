import { DoctorResponse } from '../Doctor/doctor-response';
import { UserResponse } from '../User/UserResponse';

export interface AppointmentResponse {
  id: string;
  user: UserResponse;
  doctor: DoctorResponse;
  date: Date;
  modality: string;
  status: string;
}
