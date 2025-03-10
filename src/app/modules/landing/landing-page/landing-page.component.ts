import { Component } from '@angular/core';
import { CardOptionComponent } from '../card-option/card-option.component';
import { PromotionComponent } from '../promotion/promotion.component';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CardOptionComponent, PromotionComponent, CarouselComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  paths: { path: String; text: String; color: String; link: String }[] = [
    {
      path: 'assets/icons/stethoscope_white.png',
      text: 'Veja as especialidades',
      color: 'light-blue',
      link: '',
    },
    {
      path: 'assets/icons/notes_white.png',
      text: 'Atendimento online',
      color: 'light-blue',
      link: '',
    },
    {
      path: 'assets/icons/hospital_white.png',
      text: 'Atendimento presencial',
      color: 'light-blue',
      link: '',
    },
    {
      path: 'assets/icons/account_black.svg',
      text: 'Faça uma conta',
      color: 'purple',
      link: '/auth/signup',
    },
  ];
}
