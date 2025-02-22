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
import { Store } from '@ngrx/store';
import { setUser } from '../../../store/auth.action';
import { Subject } from 'rxjs';
import { RoleNotifierService } from '../../../services/role-notifier.service';

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
    private sharedMenu: SharedMenuService,
    private store: Store,
    private roleNotifier: RoleNotifierService
  ) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  onLogin() {
    this.auth.login(this.loginForm.getRawValue()).subscribe({
      next: (response) => {
        this.store.dispatch(setUser({ user: response }));
        this.notifyRole(response.role);
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
  public notifyRole(role: string) {
    const newRole = role.replace('[ROLE_', '').replace(']', '');
    this.roleNotifier.setRoleNotification(newRole);
  }
}
