import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campusboard } from './campusboard';

describe('Campusboard', () => {
  let component: Campusboard;
  let fixture: ComponentFixture<Campusboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campusboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Campusboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
