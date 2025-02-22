import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserEndpointService } from '../../../../services/user-endpoint.service';
import { UserPut } from '../../../../models/User/UserPut';
import { take } from 'rxjs';

@Component({
  selector: 'app-myinfo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './myinfo.component.html',
  styleUrl: './myinfo.component.css',
})
export class MyinfoComponent implements OnInit {
  private userId!: string;
  constructor(private userAPI: UserEndpointService, private router: Router) {}
  public myinfoForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  isEditing: Boolean = false;
  ngOnInit(): void {
    this.myinfoForm.disable();
    this.userAPI.getUserInfo().subscribe((response) => {
      this.userId = response.id;
      this.myinfoForm.patchValue({
        name: response.name,
        address: response.address,
        cpf: response.cpf,
        email: response.email,
      });
    });
  }
  public onEdit() {
    this.myinfoForm.get('name')?.enable();
    this.myinfoForm.get('address')?.enable();
    this.isEditing = true;
  }
  public onSave() {
    const data = this.destructuring();
    this.putPersonalInfo(data);
  }
  private destructuring(): UserPut {
    const { name, address } = this.myinfoForm.getRawValue();
    const obj: UserPut = { name, address };
    return obj;
  }
  private putPersonalInfo(data: UserPut) {
    this.userAPI
      .putInfo(this.userId, data)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          console.log(response);

          this.myinfoForm.patchValue({
            name: response.name,
            address: response.address,
            cpf: response.cpf,
            email: response.email,
          });
        },
        complete: () => {
          console.log('completou');

          this.isEditing = false;
          this.myinfoForm.get('name')?.disable();
          this.myinfoForm.get('address')?.disable();
        },
      });
  }
  public onNewPassword() {
    this.router.navigate(['/home/myinfo/password']);
  }
}
