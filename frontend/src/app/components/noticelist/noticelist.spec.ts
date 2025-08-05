import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticelist } from './noticelist';

describe('Noticelist', () => {
  let component: Noticelist;
  let fixture: ComponentFixture<Noticelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticelist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticelist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
