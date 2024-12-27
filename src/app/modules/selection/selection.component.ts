import { Component, OnInit } from '@angular/core';
import { CardSelectionComponent } from '../card-selection/card-selection.component';
import { DoctorEndpointService } from '../../services/doctor-endpoint.service';
import { Observable } from 'rxjs';
import { DoctorResponse } from '../../models/Doctor/doctor-response';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CardSelectionComponent],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
})
export class SelectionComponent implements OnInit {
  specialty!: string;
  doctors!: Observable<DoctorResponse[]>;
  constructor(private doctorApi: DoctorEndpointService) {}
  ngOnInit(): void {}
}
