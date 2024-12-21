import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile-signup.component.html',
  styleUrl: './profile-signup.component.css',
})
export class ProfileSignupComponent {
  public profile = new FormGroup({
    role: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router) {}
  public warn: Boolean = false;

  onNext() {
    const role = this.profile.get('role')?.value;

    this.router.navigate([`signup/${role}`]);
  }
}
