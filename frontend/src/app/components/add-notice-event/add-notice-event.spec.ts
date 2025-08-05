import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoticeEvent } from './add-notice-event';

describe('AddNoticeEvent', () => {
  let component: AddNoticeEvent;
  let fixture: ComponentFixture<AddNoticeEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNoticeEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNoticeEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
