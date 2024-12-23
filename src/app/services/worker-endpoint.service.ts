import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkerRegistration } from '../models/Worker/WorkerRegistration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkerEndpointService {
  constructor(private http: HttpClient) {}
  private url = 'https://doctortime-api.onrender.com/worker';

  create(workerRegistration: WorkerRegistration): Observable<void> {
    return this.http.post<void>(`${this.url}/create`, workerRegistration);
  }
}
