import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '../models/User/UserRegistration';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/User/UserResponse';
import { UserInfo } from '../models/User/UserInfo';

@Injectable({
  providedIn: 'root',
})
export class UserEndpointService {
  private url: string = 'https://doctortime-api.onrender.com/user/';
  constructor(private http: HttpClient) {}

  create(userRegistration: UserRegistration): Observable<void> {
    return this.http.post<void>(`${this.url}create`, userRegistration);
  }
  getUserInfo(): Observable<UserInfo> {
    const email = sessionStorage.getItem('email');
    return this.http.get<UserInfo>(`${this.url}${email}`);
  }
}
