import { Component, OnInit } from '@angular/core';
import { UserEndpointService } from '../../services/user-endpoint.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myinfo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './myinfo.component.html',
  styleUrl: './myinfo.component.css',
})
export class MyinfoComponent implements OnInit {
  constructor(private userAPI: UserEndpointService) {}
  myinfoForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  ngOnInit(): void {
    this.myinfoForm.disable();
    this.userAPI.getUserInfo().subscribe((response) => {
      this.myinfoForm.patchValue({
        name: response.name,
        address: response.address,
        cpf: response.cpf,
        email: response.email,
      });
    });
  }
  onEdit() {
    this.myinfoForm.get('name')?.enable();
    this.myinfoForm.get('address')?.enable();
  }
}
