import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DoctorEndpointService } from '../../../services/doctor-endpoint.service';
import { Route, Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { ZipCodeService } from '../../../services/zip-code.service';

@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css',
})
export class AddDoctorComponent {
  constructor(
    private doctorAPI: DoctorEndpointService,
    private router: Router,
    private zipCodeService: ZipCodeService
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

  doctorForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    photoUrl: new FormControl('', [Validators.required]),
    CRM: new FormControl('', [Validators.required]),
    specialty: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.doctorForm.getRawValue());

    this.doctorAPI.create(this.doctorForm.getRawValue()).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onBack() {
    this.router.navigate(['/home']);
  }
}
