import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/common/header/header.component';
import { FooterComponent } from './modules/common/footer/footer.component';
import { AsideMenuComponent } from './modules/common/aside-menu/aside-menu.component';
import { SharedMenuService } from './services/shared-menu.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AsideMenuComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'doctortime';
  constructor(private sharedMenu: SharedMenuService) {}
  isOpen!: Observable<boolean>;
  ngOnInit(): void {
    this.isOpen = this.sharedMenu.getOpenMenu();
  }
}
