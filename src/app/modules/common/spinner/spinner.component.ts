import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: '<div class="spinner"><mat-spinner></mat-spinner></div>',
  styleUrl: './spinner.component.css',
})
export class SpinnerComponent {}
