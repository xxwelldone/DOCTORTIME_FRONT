import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerSignUpComponent } from './worker-sign-up.component';

describe('WorkerSignUpComponent', () => {
  let component: WorkerSignUpComponent;
  let fixture: ComponentFixture<WorkerSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
