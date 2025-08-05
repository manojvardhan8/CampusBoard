import { Component } from '@angular/core';
import { Noticecard } from '../noticecard/noticecard';
import { Noticeform } from '../noticeform/noticeform';
import { Eventform } from '../eventform/eventform';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-notice-event',
  imports: [Noticeform,Eventform,CommonModule],
  templateUrl: './add-notice-event.html',
  styleUrl: './add-notice-event.css'
})
export class AddNoticeEvent {
  selection=true;
  toggle(){
    this.selection=!this.selection;
    
  }
}
