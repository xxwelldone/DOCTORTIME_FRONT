import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSignupComponent } from './profile-signup.component';

describe('ProfileSignupComponent', () => {
  let component: ProfileSignupComponent;
  let fixture: ComponentFixture<ProfileSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
