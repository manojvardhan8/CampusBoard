import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticeform } from './noticeform';

describe('Noticeform', () => {
  let component: Noticeform;
  let fixture: ComponentFixture<Noticeform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticeform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticeform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
