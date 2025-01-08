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
import { Router } from '@angular/router';
import { UserEndpointService } from '../../../../services/user-endpoint.service';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css',
})
export class NewPasswordComponent implements OnInit {
  constructor(private router: Router, private userAPI: UserEndpointService) {}
  private userId!: string;
  public warning: Boolean = false;
  passwordForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmation: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.passwordForm.setValidators(
      this.passwordMatchesValidator('password', 'confirmation')
    );
    this.userAPI.getUserInfo().subscribe((result) => {
      this.userId = result.id;
    });
  }
  onBack() {
    this.router.navigate(['/home/myinfo']);
  }
  onConfirm() {
    const newpassword = this.destructuring();

    this.putPassword(newpassword);
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
  private destructuring(): string {
    const { password, confirmation } = this.passwordForm.getRawValue();
    return password;
  }
  private putPassword(newpassword: string) {
    this.userAPI.putPassword(this.userId, newpassword).subscribe({
      complete: () => {
        this.router.navigate(['/home/myinfo']);
      },
    });
  }
}
