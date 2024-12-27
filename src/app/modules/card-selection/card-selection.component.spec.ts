import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectionComponent } from './card-selection.component';

describe('CardSelectionComponent', () => {
  let component: CardSelectionComponent;
  let fixture: ComponentFixture<CardSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
