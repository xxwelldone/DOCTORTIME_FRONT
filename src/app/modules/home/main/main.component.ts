import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import { CardOptionComponent } from '../../landing/card-option/card-option.component';
import { OptionComponent } from '../../common/option/option.component';
import { UserEndpointService } from '../../../services/user-endpoint.service';
import { WorkerEndpointService } from '../../../services/worker-endpoint.service';
import { RoleNotifierService } from '../../../services/role-notifier.service';
import { log } from 'console';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarouselComponent, OptionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  public username!: string;
  public role!: string;
  UserOptions: { text: string; url: string; imgPath: string }[] = [
    {
      text: 'Minhas consultas',
      url: '/home/myagenda',
      imgPath: '/assets/icons/myappointments.svg',
    },
    {
      text: 'Marcação',
      url: '/home/makeappointment',
      imgPath: '/assets/icons/appointment.svg',
    },
    {
      text: 'Meu dados',
      url: '/home/myinfo',
      imgPath: '/assets/icons/mydata.svg',
    },
    {
      text: 'Sair',
      url: '/home/',
      imgPath: '/assets/icons/logout-white.svg',
    },
  ];
  WorkerOptions: { text: string; url: string; imgPath: string }[] = [
    {
      text: 'Adicionar médico',
      url: '/home/adddoctor',
      imgPath: '/assets/icons/doctor.svg',
    },
  ];
  constructor(
    private userAPI: UserEndpointService,
    private workerAPI: WorkerEndpointService,
    private roleNotifier: RoleNotifierService
  ) {}
  ngOnInit(): void {
    this.roleNotifier.getRoleNotification().subscribe((role) => {
      this.role = role;
      switch (this.role) {
        case 'USER':
          this.userAPI.getUserInfo().subscribe((results) => {
            this.username = results.name;
          });

          break;
        case 'WORKER':
          this.workerAPI.getWorkerInfo().subscribe((result) => {
            this.username = result.name;
          });
          break;
        default:
          this.username = 'nome não foi localizado';
          break;
      }
    });
  }
}
