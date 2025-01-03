import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedMenuService {
  public isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  getState(): Observable<boolean> {
    return this.isOpen.asObservable();
  }
  setState(isOpen: boolean) {
    this.isOpen.next(isOpen);
  }
}
