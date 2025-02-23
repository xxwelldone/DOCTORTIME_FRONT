import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { removeUser } from '../../../store/auth.action';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css',
})
export class OptionComponent {
  @Input() public content!: string;
  @Input() public pathIMG!: string;
  @Input() public pathURL!: string;
  store: any;
  sharedMenu: any;
  logout() {
    this.store.dispatch(removeUser());
    this.sharedMenu.setShowIcon(false);
    this.sharedMenu.setOpenMenu(false);
  }
}
