import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import {
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedMenuService } from '../../../services/shared-menu.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private sharedMenu: SharedMenuService
  ) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onLogin() {
    this.auth.login(this.loginForm.getRawValue()).subscribe({
      next: (response) => {
        sessionStorage.setItem('token', response.token);
      },
      complete: () => {
        this.sharedMenu.setShowIcon(true);
        this.router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
