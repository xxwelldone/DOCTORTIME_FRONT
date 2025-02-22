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
import { ZipCodeService } from '../../../services/zip-code.service';
import { zipCode } from '../../../models/zipCode';
import { NgxMaskDirective } from 'ngx-mask';
import { UserEndpointService } from '../../../services/user-endpoint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.css',
})
export class UserSignUpComponent implements OnInit {
  constructor(
    private zipCodeService: ZipCodeService,
    private userAPI: UserEndpointService,
    private router: Router
  ) {}
  public warning: Boolean = false;
  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.userForm.setValidators(
      this.passwordMatchesValidator('password', 'confirm')
    );
    this.observeZipCode();
  }
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
    const obj = this.userForm.getRawValue();
    const { confirm, cep, ...payload } = obj;
    return payload;
  }
  onRegister() {
    const payload = this.destructuringForm();

    this.userAPI.create(payload).subscribe({
      complete: () => {
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  observeZipCode() {
    this.userForm.get('cep')?.valueChanges.subscribe((value) => {
      if (value?.length === 8) {
        this.getAddress(value);
      } else {
        this.userForm.patchValue({
          address: '',
        });
      }
    });
  }
  getAddress(value: string) {
    this.zipCodeService.getAddress(value).subscribe({
      next: (value) => {
        if (!value.erro) {
          const address = new zipCode(value).formattingAddress();
          this.userForm.patchValue({
            address: address,
          });
        } else {
          this.userForm.patchValue({
            address: '',
          });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
