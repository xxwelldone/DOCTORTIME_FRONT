import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserEndpointService {
  private url: string = 'https://doctortime-api.onrender.com/user/';
  constructor(private http: HttpClient) {}
}
