import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion',
  standalone: true,
  imports: [],
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.css',
})
export class PromotionComponent {
  public promotionBox: { text: String; color: String; size: String }[] = [
    { text: 'Planos para 60+', color: 'ocean', size: 's2' },
    {
      text: 'Pague apenas pela consulta concluída',
      color: 'dark-blue',
      size: 's1',
    },
    { text: 'Contato direto com seu médico', color: 'purple', size: 's1' },
    { text: 'Planos para especialidades', color: 'light-blue', size: 's2' },
  ];
}
