import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCalendarComponent } from './reactive-calendar.component';

describe('ReactiveCalendarComponent', () => {
  let component: ReactiveCalendarComponent;
  let fixture: ComponentFixture<ReactiveCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
