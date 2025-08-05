import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventform } from './eventform';

describe('Eventform', () => {
  let component: Eventform;
  let fixture: ComponentFixture<Eventform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
