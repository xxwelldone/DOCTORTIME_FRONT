import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkerRegistration } from '../models/Worker/WorkerRegistration';
import { Observable } from 'rxjs';
import { WorkerResponseDTO } from '../models/Worker/WorkerResponseDTO';
import { Store } from '@ngrx/store';
import { selectUserEmail } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class WorkerEndpointService {
  constructor(private http: HttpClient, private store: Store) {}
  private url = 'https://doctortime-api.onrender.com/worker';

  create(workerRegistration: WorkerRegistration): Observable<void> {
    return this.http.post<void>(`${this.url}/create`, workerRegistration);
  }
  getWorkerInfo(): Observable<WorkerResponseDTO> {
    let email;
    this.store
      .select(selectUserEmail)
      .subscribe((response) => (email = response));
    return this.http.get<WorkerResponseDTO>(`${this.url}/${email}`);
  }
}
