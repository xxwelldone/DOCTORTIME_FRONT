import { Component } from '@angular/core';
import { CarouselComponent } from '../common/carousel/carousel.component';
import { CardOptionComponent } from '../landing/card-option/card-option.component';
import { OptionComponent } from '../common/option/option.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarouselComponent, OptionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  UserOptions: { text: string; url: string; imgPath: string }[] = [
    {
      text: 'Minhas consultas',
      url: '',
      imgPath: '/assets/icons/myappointments.svg',
    },
    {
      text: 'Marcação',
      url: '/home/makeappointment',
      imgPath: '/assets/icons/appointment.svg',
    },
    {
      text: 'Especialidades',
      url: '',
      imgPath: '/assets/icons/stethoscope_white.png',
    },
    {
      text: 'Meu dados',
      url: '',
      imgPath: '/assets/icons/mydata.svg',
    },
    {
      text: 'Sair',
      url: '',
      imgPath: '/assets/icons/logout-white.svg',
    },
  ];
}
