import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}
