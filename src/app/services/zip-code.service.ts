import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { zipCode } from '../models/zipCode';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZipCodeService {
  private url: string = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}
  getAddress(zip: string): Observable<zipCode> {
    return this.http.get<zipCode>(`${this.url}${zip}/json/`);
  }
}
