import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '../models/User/UserRegistration';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/User/UserInfo';
import { UserPut } from '../models/User/UserPut';

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
  putInfo(userId: string, userData: UserPut): Observable<UserInfo> {
    return this.http.put<UserInfo>(`${this.url}${userId}`, userData);
  }
  putPassword(userId: string, password: string): Observable<UserInfo> {
    return this.http.put<UserInfo>(`${this.url}${userId}`, { password });
  }
}
