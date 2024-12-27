import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentSearch } from '../../models/Appointment/AppointmentSearch';

@Component({
  selector: 'app-make-appointment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './make-appointment.component.html',
  styleUrl: './make-appointment.component.css',
})
export class MakeAppointmentComponent {
  constructor(private router: Router) {}
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
    const obj = this.appointmentForm;

    this.router.navigate(['home/makeappointment/selection']);
  }
  stringToDate(date: string, time: string) {
    const [year, month, day] = date.split('-').map(Number);
    const [hour, minute] = time.split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute);
  }
}
