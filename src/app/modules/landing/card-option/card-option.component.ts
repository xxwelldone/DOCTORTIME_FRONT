import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-option',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-option.component.html',
  styleUrl: './card-option.component.css',
})
export class CardOptionComponent {
  @Input() public path!: String;
  @Input() public text!: String;
  @Input() public color!: String;
  @Input() public link!: String;
}
