import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '../models/User/UserRegistration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserEndpointService {
  private url: string = 'https://doctortime-api.onrender.com/user/';
  constructor(private http: HttpClient) {}

  create(userRegistration: UserRegistration): Observable<void> {
    return this.http.post<void>(`${this.url}create`, userRegistration);
  }
}
