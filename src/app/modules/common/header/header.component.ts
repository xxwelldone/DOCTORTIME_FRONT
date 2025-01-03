import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SharedMenuService } from '../../../services/shared-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  isLogged: boolean = false;
  constructor(private sharedMenu: SharedMenuService) {}
  ngOnInit(): void {
    this.checkLoggin();
  }
  onClick() {
    this.isOpen = !this.isOpen;
    this.sharedMenu.setState(this.isOpen);
  }
  checkLoggin() {
    this.isLogged = sessionStorage.getItem('token') ? true : false;
  }
}
