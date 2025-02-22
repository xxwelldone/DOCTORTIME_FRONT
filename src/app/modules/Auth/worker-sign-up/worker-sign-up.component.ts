import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { WorkerEndpointService } from '../../../services/worker-endpoint.service';
import { Router } from '@angular/router';
import { NormalizeKeysService } from '../../../services/normalize-keys.service';

@Component({
  selector: 'app-worker-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './worker-sign-up.component.html',
  styleUrl: './worker-sign-up.component.css',
})
export class WorkerSignUpComponent implements OnInit {
  constructor(
    private workerAPI: WorkerEndpointService,
    private router: Router,
    private normalizer: NormalizeKeysService
  ) {}
  ngOnInit(): void {
    this.workerForm.setValidators(
      this.passwordMatchesValidator('password', 'confirmation')
    );
  }
  workerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    setor: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmation: new FormControl('', [Validators.required]),
  });
  public warning: Boolean = false;

  passwordMatchesValidator = (f1: string, f2: string): ValidatorFn => {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const value1 = formGroup.get(f1)?.value;
      const value2 = formGroup.get(f2)?.value;
      if (value1 !== value2) {
        this.warning = true;
        return { passDoestMatch: true };
      }
      this.warning = false;
      return null;
    };
  };

  destructuringForm() {
    const obj = this.workerForm.getRawValue();
    const { confirmation, ...payload } = obj;

    return payload;
  }
  onConfirm() {
    const payload = this.destructuringForm();

    this.workerAPI.create(payload).subscribe({
      complete: () => {
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
