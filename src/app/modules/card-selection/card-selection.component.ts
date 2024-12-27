import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-selection',
  standalone: true,
  imports: [],

  templateUrl: './card-selection.component.html',
  styleUrl: './card-selection.component.css',
})
export class CardSelectionComponent {
  public expand: boolean = false;
  public availableTimes: string[] = [
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
  ];
  onExpand() {
    this.expand = !this.expand;
  }
}
