import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.css',
})
export class AsideMenuComponent {
  menuOptions: { icon: string; text: string; route: string }[] = [
    { icon: '/assets/icons/home.svg', text: 'Ínicio', route: '/' },
    {
      icon: '/assets/icons/person.svg',
      text: 'Área do usuário',
      route: '/home',
    },
    { icon: '/assets/icons/data.svg', text: 'Meus dados', route: '/myinfo' },
    { icon: '/assets/icons/logout.svg', text: 'Sair', route: '/logout' },
  ];
}
