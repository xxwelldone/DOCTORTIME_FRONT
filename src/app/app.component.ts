import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/common/header/header.component';
import { FooterComponent } from './modules/common/footer/footer.component';
import { AsideMenuComponent } from './modules/common/aside-menu/aside-menu.component';
import { SharedMenuService } from './services/shared-menu.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingService } from './services/loading.service';
import { SpinnerComponent } from './modules/common/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AsideMenuComponent,
    CommonModule,
    SpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'doctortime';
  constructor(
    private sharedMenu: SharedMenuService,
    private loading: LoadingService,
    private cdf: ChangeDetectorRef
  ) {}
  isOpen!: Observable<boolean>;
  isLoading = this.loading.isLoading;

  ngOnInit(): void {
    this.isOpen = this.sharedMenu.getOpenMenu();
  }
  ngAfterViewInit(): void {
    this.cdf.detectChanges();
  }
}
