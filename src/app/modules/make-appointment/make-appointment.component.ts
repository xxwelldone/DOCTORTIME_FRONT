import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SharedAppointmentService } from '../../services/shared-appointment.service';

@Component({
  selector: 'app-make-appointment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './make-appointment.component.html',
  styleUrl: './make-appointment.component.css',
})
export class MakeAppointmentComponent {
  constructor(
    private router: Router,
    private sharedAppointmentService: SharedAppointmentService
  ) {}
  public arraySpecialty: string[] = [
    'CARDIOLOGIA',
    'DERMATOLOGIA',
    'GINECOLOGIA',
    'PEDIATRIA',
    'ORTOPEDIA',
    'NEUROLOGIA',
    'PSIQUIATRIA',
    'UROLOGIA',
    'GASTROENTEROLOGIA',
    'ONCOLOGIA',
    'OFTALMOLOGIA',
    'OTORRINOLARINGOLOGIA',
    'REUMATOLOGIA',
    'ENDOCRINOLOGIA',
    'HEMATOLOGIA',
  ];
  public appointmentForm: FormGroup = new FormGroup({
    modality: new FormControl('', [Validators.required]),
    specialty: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });
  onBack() {
    this.router.navigate(['/home']);
  }
  onNext() {
    this.sharedAppointmentService.setSharedAppointment(
      this.appointmentForm.getRawValue()
    );
    this.router.navigate(['home/makeappointment/selection']);
  }
}
