import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRegistrationComponent } from './hero-registration.component';

describe('HeroRegistrationComponent', () => {
  let component: HeroRegistrationComponent;
  let fixture: ComponentFixture<HeroRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
