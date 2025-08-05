import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventScreen } from './event-screen';

describe('EventScreen', () => {
  let component: EventScreen;
  let fixture: ComponentFixture<EventScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
