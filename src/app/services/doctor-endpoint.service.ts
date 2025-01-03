import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorResponse } from '../models/Doctor/doctor-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorEndpointService {
  private url: string = 'https://doctortime-api.onrender.com/doctor';

  constructor(private http: HttpClient) {}

  getBySpecialty(
    specialty: string,
    page: number,
    size: number
  ): Observable<DoctorResponse[]> {
    console.log(specialty);

    const pageable: string = `?page=${page}&size=${size}&sort=%5B%22CRM%22%5D`;
    return this.http.get<DoctorResponse[]>(
      `${this.url}/specialty/${specialty}${pageable}`
    );
  }
}
