import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import { CardOptionComponent } from '../../landing/card-option/card-option.component';
import { OptionComponent } from '../../common/option/option.component';
import { UserEndpointService } from '../../../services/user-endpoint.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarouselComponent, OptionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  public username!: string;
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
    // {
    //   text: 'Especialidades',
    //   url: '/home/',
    //   imgPath: '/assets/icons/stethoscope_white.png',
    // },
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
  constructor(private userAPI: UserEndpointService) {}
  ngOnInit(): void {
    this.userAPI.getUserInfo().subscribe((results) => {
      this.username = results.name;
    });
  }
}
