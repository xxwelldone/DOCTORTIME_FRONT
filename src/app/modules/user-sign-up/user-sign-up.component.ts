import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ZipCodeService } from '../../services/zip-code.service';
import { catchError, map, Observable } from 'rxjs';
import { zipCode } from '../../models/zipCode';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-user-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.css',
})
export class UserSignUpComponent implements OnInit {
  constructor(private zipCodeService: ZipCodeService) {}
  public warning: Boolean = false;
  userForm = new FormGroup({
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
    console.log(this.userForm);
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
        console.log(value.erro);

        if (!value.erro) {
          const address = new zipCode(value).formattingAddress();
          console.log(address);
          this.userForm.patchValue({
            address: address,
          });
        } else {
          this.userForm.patchValue({
            address: '',
          });
        }
      },
      error: (err) => {},
    });
  }
}
