import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventlist } from './eventlist';

describe('Eventlist', () => {
  let component: Eventlist;
  let fixture: ComponentFixture<Eventlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
