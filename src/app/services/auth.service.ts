import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/Login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/Login-Respose';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private url: string = 'https://doctortime-api.onrender.com/auth';

  login(login: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.url}/login`, login);
  }
}
