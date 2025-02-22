import { Component, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleNotifierService } from '../../../services/role-notifier.service';
import { Store } from '@ngrx/store';
import { removeUser } from '../../../store/auth.action';
import { switchMap, take } from 'rxjs';
import { selectUserState } from '../../../store/auth.selectors';
import { SharedMenuService } from '../../../services/shared-menu.service';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.css',
})
export class AsideMenuComponent {
  constructor(
    private notifier: RoleNotifierService,
    private store: Store,
    private sharedMenu: SharedMenuService
  ) {}

  public role!: string;
  ngOnChanges(changes: SimpleChanges): void {
    this.notifier.getRoleNotification().subscribe({
      next: (result) => {
        this.role = result;
      },
    });
  }
  menuOptions: { icon: string; text: string; route: string; role: string }[] = [
    {
      icon: '/assets/icons/home.svg',
      text: 'Ínicio',
      route: '/',
      role: this.role,
    },
    {
      icon: '/assets/icons/person.svg',
      text: 'Área do usuário',
      route: '/home',
      role: this.role,
    },
    {
      icon: '/assets/icons/data.svg',
      text: 'Meus dados',
      route: '/home/myinfo',
      role: '[ROLE_USER]',
    },
    {
      icon: '/assets/icons/logout.svg',
      text: 'Sair',
      route: 'logout',
      role: this.role,
    },
  ];

  logout() {
    this.store.dispatch(removeUser());
    this.sharedMenu.setShowIcon(false);
    this.sharedMenu.setOpenMenu(false);
  }
}
