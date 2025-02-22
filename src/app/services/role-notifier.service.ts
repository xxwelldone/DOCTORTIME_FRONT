import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleNotifierService {
  public notification: ReplaySubject<string> = new ReplaySubject<string>();

  constructor() {}

  setRoleNotification(role: string) {
    this.notification.next(role);
  }
  getRoleNotification() {
    return this.notification.asObservable();
  }
}
