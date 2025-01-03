import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedMenuService {
  public isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public showIcon: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  getOpenMenu(): Observable<boolean> {
    return this.isOpen.asObservable();
  }
  setOpenMenu(isOpen: boolean) {
    this.isOpen.next(isOpen);
  }

  getShowIcon(): Observable<boolean> {
    return this.showIcon.asObservable();
  }
  setShowIcon(showIcon: boolean) {
    this.showIcon.next(showIcon);
  }
}
