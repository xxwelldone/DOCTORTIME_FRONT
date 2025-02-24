import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
  template: '<div class="spinner"><mat-spinner></mat-spinner></div>',
  styleUrl: './spinner.component.css',
})
export class SpinnerComponent {
  // isLoading$ = this.loadingService.isLoading$;
  constructor(private loadingService: LoadingService) {}
}
