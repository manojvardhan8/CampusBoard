import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticecard } from './noticecard';

describe('Noticecard', () => {
  let component: Noticecard;
  let fixture: ComponentFixture<Noticecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
